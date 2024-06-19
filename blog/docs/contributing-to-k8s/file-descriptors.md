

find . -type f -name "*.sh" -o -name "*.go" -o -name "*.py" | xargs grep '|' -n
find . -type f -name "*.sh" -o -name "*.go" -o -name "*.py" | xargs grep '>' -n
find . -type f -name "*.sh" -o -name "*.go" -o -name "*.py" | xargs grep '<' -n

