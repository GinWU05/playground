"""
hello-minimax.py v0.1.0

Copyright (c) 2025 GinWU
Licensed under the MIT License

docker run -it -v /mnt/d/software/playground:/app -w /app  \
  -e ANTHROPIC_BASE_URL=https://api.minimaxi.com/anthropic -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
  python:3 bash -c "pip install anthropic && python 01-hello-minimax.py"
"""

import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    system="You are a helpful assistant.",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Hi, how are you?"
                }
            ]
        }
    ]
)

for block in message.content:
    if block.type == "thinking":
        print(f"Thinking:\n{block.thinking}\n")
    elif block.type == "text":
        print(f"Text:\n{block.text}\n")
