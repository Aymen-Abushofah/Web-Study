import json
import re

with open("raw_questions.txt", "r", encoding="utf-8") as f:
    text = f.read()

questions = []

sections_split = re.split(r'##\s+[^\s]+\s+Section\s+\d+:\s+(.*?)\n', text)
answers_text = ""

for i in range(1, len(sections_split), 2):
    section_name = sections_split[i].strip()
    section_content = sections_split[i+1]
    
    if "## ✅ Answer Key" in section_content:
        parts = section_content.split("## ✅ Answer Key")
        section_content = parts[0]
        answers_text = parts[1]
    
    q_blocks = re.split(r'\*\*Q(\d+)\.\*\*', section_content)
    
    for j in range(1, len(q_blocks), 2):
        q_num = int(q_blocks[j])
        q_body = q_blocks[j+1]
        
        match = re.search(r'\n([A-D]\))', q_body)
        if not match:
            continue
        
        q_text = q_body[:match.start()].strip()
        options_text = q_body[match.start():].split('---')[0].strip()
        
        options = {}
        opt_matches = list(re.finditer(r'([A-D])\)\s+(.*?)(?=\n[A-D]\)|\Z)', options_text, re.DOTALL))
        for o in opt_matches:
            options[o.group(1)] = o.group(2).strip()
            
        questions.append({
            "id": q_num,
            "section": section_name,
            "question": q_text,
            "options": options,
            "answer": ""
        })

# Parse answers better
tokens = [t.strip() for t in answers_text.replace('\n', '|').split('|') if t.strip()]
ans_dict = {}
for i in range(len(tokens) - 1):
    if tokens[i].isdigit() and tokens[i+1] in ['A', 'B', 'C', 'D']:
        ans_dict[int(tokens[i])] = tokens[i+1]

import random
random.seed(42) # Ensure deterministic shuffling

for q in questions:
    if q["id"] in ans_dict:
        q["answer"] = ans_dict[q["id"]]
        
    items = list(q["options"].items())
    random.shuffle(items)
    
    new_options = {}
    new_answer = q["answer"]
    letters = ['A', 'B', 'C', 'D']
    
    for i, (old_letter, text) in enumerate(items):
        new_letter = letters[i]
        new_options[new_letter] = text
        if old_letter == q["answer"]:
            new_answer = new_letter
            
    q["options"] = new_options
    q["answer"] = new_answer

with open("questions.js", "w", encoding="utf-8") as f:
    f.write("const quizData = ")
    f.write(json.dumps(questions, indent=2))
    f.write(";\n")
    
print(f"Parsed {len(questions)} questions.")
