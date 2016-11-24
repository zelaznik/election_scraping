import sys, os, shutil

def clear_folder(folder):
    if os.path.exists(folder):
        shutil.rmtree(folder)

def main(year, *chambers):
    sections = ['post_processing','output']
    for section in sections:
        for chamber in chambers:
            clear_folder(os.path.join(section, chamber, year))

if __name__ == '__main__':
    _, year, *chambers = sys.argv
    main(year, *chambers)
