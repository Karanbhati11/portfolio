import os


dir_list = [
    "assets", 
    "components", 
    "containers", 
    "data", 
    "pages", 
    "routes", 
    "services", 
    "styles", 
    "utils"
]

def make_directory(dirs):
    for dir in dirs:
        try:
            os.mkdir(dir)
        except Exception as e:
            print(e)
        print(f"{dir} created successfully")


make_directory(dir_list)
