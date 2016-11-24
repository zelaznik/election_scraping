import sys, os

def git_ensure_folder(folder):
    if not os.path.exists(folder):
        os.mkdir(folder)

    gitignore = os.path.join(folder, '.gitignore')
    with open(gitignore, 'a') as f:
        pass

def main(year, *chambers):
    sections = ['post_processing','output','cached_websites']
    for section in sections:
        git_ensure_folder(section)
        for chamber in chambers:
            git_ensure_folder(os.path.join(section, chamber))
            git_ensure_folder(os.path.join(section, chamber, year))

if __name__ == '__main__':
    _, year, *chambers = sys.argv
    main(year, *chambers)