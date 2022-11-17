import langid
from textblob import TextBlob
from googletrans import Translator

sample = "Buongiorno!"
sample1 = "helloo worldd"


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


print(translate(sample, 'en'))
