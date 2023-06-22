import json
import re

def lambda_handler(event, context):
    # TODO implement
    parsed = handle_message(event['text'])
    caller = event['user_name']
    
    result = "@caller's standup update:\nYesterday:\n"
    items = parsed['y']
    yitems = [item.strip(',') for item in items]
    print(yitems)
    for i in yitems:
        result = result + "* "+ i.strip() + "\n"
    result = result + "Today:\n"
    items = parsed['t']
    titems = [item.strip(',') for item in items]
    print(titems)
    for i in titems:
        result = result + "* "+ i.strip() + "\n"
    for i in parsed['g']:
        result = result + "Hello! "+ i.strip()
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }

def handle_message(text):
    print(text)
    # Define regular expressions to match the parameters and their values
    regex = r'-([A-Za-z]+)\s+((?:[^-,]+(?:,[^-,]+)*))'

    params = {}
    
    matches = re.findall(regex, text)
    for match in matches:
        param, value = match
        params[param] = value.split(',')

    print(params)
    return params