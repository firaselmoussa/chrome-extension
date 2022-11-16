import langid

sample = "hello world!"
sample1 = "hello worldd"


def detectLanguage(input):
    return langid.classify(input)[0]


print(detectLanguage(sample))
