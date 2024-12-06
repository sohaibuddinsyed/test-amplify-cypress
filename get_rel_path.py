import os

currPath = os.getcwd()
home = os.path.expanduser("~")
print(os.path.relpath(home, currPath))
