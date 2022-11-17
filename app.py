import langid
from textblob import TextBlob

sample = "hello world!"
sample1 = "helloo worldd"


def detectLanguage(input):
    return langid.classify(input)[0]


def check_correct(input):
    blob = TextBlob(input)
    return blob.correct()


print(detectLanguage(sample))
print(check_correct(sample1))
