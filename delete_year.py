import sys, os, shutil

def clear_folder(folder):
    if os.path.exists(folder):
        shutil.rmtree(folder)

def main(year, chamber=None):
    sections = ['post_processing','output','cached_websites']
    chambers = [chamber] if chamber else ['house','senate','president']
    for section in sections:
        for chamber in chambers:
            clear_folder(os.path.join(section, chamber, year))

if __name__ == '__main__':
    _, year, *args = sys.argv
    main(year, *args)