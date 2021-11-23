import pyopenjtalk
from scipy.io import wavfile
from googletrans import Translator, LANGUAGES
import numpy as np



translator = Translator()
text = input("Masukkan Text : ")
auto = translator.translate(text, dest = "ja")
x, sr = pyopenjtalk.tts(auto.text)
wavfile.write("test.wav", sr, x.astype(np.int16))
print("Sukses")
