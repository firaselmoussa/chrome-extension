import langid
from textblob import TextBlob
from googletrans import Translator
import sys
import json
import ast


sample = "Buongiorno!"
sample1 = "helloo worldd"

data_to_pass_back = "send to node."
input = ast.literal_eval(sys.argv[1])
output = input
output.append(data_to_pass_back)
print(json.dumps(output))

sys.stdout.flush()


def detectLanguage(input):
    return langid.classify(input)[0]


def check_correct(input):
    blob = TextBlob(input)
    return blob.correct()


def translate(input, translate_to):
    translator = Translator()
    translated_text = translator.translate(
        input, dest=translate_to, src=detectLanguage(input))
    return translated_text.text


# print(translate(sample, 'en'))
