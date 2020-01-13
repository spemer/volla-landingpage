#!/bin/bash
BOLD=$(tput bold)
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
PURPLE=$(tput setaf 5)

echo "${BOLD}============================================================"
echo "${PWD##*/}"
echo "============================================================${RESET}"

#============================================================
# run dev server or deploy directly
#============================================================
dev_or_deploy() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}Run dev server (R) / Resize images (I) / Lint (L)${RESET}" ril
    case ${ril} in

      [Rr]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Run dev server 🔥${RESET}"
        npm_run_serve
        git_commit
        break;;

      [Ii]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Gulp resize images 🔥${RESET}"
        trap 'echo Stop gulp' SIGINT
        sudo gulp;
        trap SIGINT
        break;;

      [Ll]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Lint 🔥${RESET}"
        npm run lint;
        break;;

      * ) echo "${YELLOW}Please answer with (R)un / Resize (I)mages / (L)int${RESET}";;
    esac
  done
}

#============================================================
# serve with hot reload at localhost:3000
#============================================================
npm_run_serve() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}npm run serve? (Y/n) ${RESET}" yn
    case ${yn} in

      [Yy]* )
        npm run serve;
        break;;

      [Nn]* )
        return 0;;

      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# git commit
#============================================================
git_commit() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git commit? (Y/n) ${RESET}" yn
    case ${yn} in

      [Yy]* )
        IFS= read -r -p "${BOLD}Enter commit message: ${RESET}" commitmsg

        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Lint 🔥${RESET}"
        npm run lint;

        # if commitmsg empty
        if [ -z "$commitmsg" ]
        then
          echo "${BOLD}${RED}👻 Commit message is empty 👻${RESET}"
          commitmsg="Add files via upload"
        fi

        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Commit 🔥${RESET}"
        git add .;
        git commit -m "$commitmsg";

        git_push;
        break;;

      [Nn]* )
        return 0;;

      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# git push
#============================================================
git_push() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git push? (Y/n) ${RESET}" yn
    case ${yn} in

      [Yy]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Push: GitLab 🔥${RESET}"
        git push origin;
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Push: GitHub 🔥${RESET}"
        git push github;
        break;;

      [Nn]* )
        return 0;;

      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# main
#============================================================
main() {
  dev_or_deploy
}

main
