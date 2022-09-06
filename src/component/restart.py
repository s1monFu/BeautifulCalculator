import subprocess
import re
import os

ex = os.system

cmd = "netstat -tanp"
cmd = cmd.split(" ")
res = subprocess.run(cmd, stdout=subprocess.PIPE).stdout.decode('utf-8')
search = re.search("([0-9]+)\/node", res)
if not search:
    print("Node process not found. Exiting.")
    exit(0)
search = search.group(1)

print(f"Node process found: PID={search}")
ex(f"kill -9 {search}")
print("Killed")

print("Pulling from GitHub")
ex("git pull")
print("Npm installing...")
ex("npm i")
print("Building...")
ex("npm run build")
print("Serving...")
ex("serve -s build -l 9000")
print("Script finished!")