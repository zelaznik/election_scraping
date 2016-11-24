import sys, os

def git_ensure_folder(folder):
    if not os.path.exists(folder):
        os.mkdir(folder)

    gitignore = os.path.join(folder, '.gitignore')
    with open(gitignore, 'a') as f:
        pass

def main(year, chamber=None):
    sections = ['post_processing','output','cached_websites']
    chambers = [chamber] if chamber else ['house','senate','president']
    for section in sections:
        git_ensure_folder(section)
        for chamber in chambers:
            git_ensure_folder(os.path.join(section, chamber))
            git_ensure_folder(os.path.join(section, chamber, year))


if __name__ == '__main__':
    _, year, *args = sys.argv
    main(year, *args)