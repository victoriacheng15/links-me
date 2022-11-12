#! /usr/bin/bash

update_main() {
  git checkout main
  sleep 1
  git fetch && git pull origin main
}

rome_apply() {
  npm run rome:apply
}

rome_write() {
  npm run prettier:tw
  sleep 2
  echo "########### run rome formatter"
  npm run rome:write
}

action_array=("update main" "rome check apply" "rome format write")

PS3="Select the action: "
select action in "${action_array[@]}"
do
  case $action in
    ${action_array[0]})
      update_main
      exit
      ;;
    ${action_array[1]})
      rome_apply
      exit
    ;;
    ${action_array[2]})
      rome_write
      exit
    ;;
  esac
done