# This is a small tutrial on how to use cpp on zed


## First you need to install MSYS

`winget install --id=MSYS2.MSYS2  -e --location "D:\Program Files\{insert folder name}"`

## Run the exe named ucrt64.exe

You can do that thorugh searching that name from the search-bar or just by going to the location were you installed it!

that will open a terminal!

## Update the Package Database

`pacman -Syu`

## Install the C++ Compiler Toolchain

`pacman -S mingw-w64-ucrt-x86_64-toolchain`

##  Verify the Installation

`g++ --version`

## LAST: Add the Compiler to the Windows PATH (for use in Zed)

Add it to the windows environment variables

## You will see some weird errors on the built in functions!

open the ucrt64.exe again
and type:
`pacman -Syu mingw-w64-ucrt-x86_64-clang`
`pacman -S mingw-w64-ucrt-x86_64-clang-tools-extra`

## Running using a shortcut!

create a tasks file
```txt
├───.zed
│       tasks.json
```
in tasks.json
```json []
[
  {
    "label": "Compile and Run C++ (PowerShell)",
    "command": "powershell",
    "args": [
      "-NoLogo",
      "-Command",
      "Write-Host 'Building $ZED_FILENAME ...' -ForegroundColor Cyan; g++ $ZED_FILENAME -o out.exe; if ($?) { Write-Host 'Running...' -ForegroundColor Green; ./out.exe; Write-Host ''; Write-Host '' } else { Write-Host 'Compilation Failed' -ForegroundColor Red }"
    ],
    "env": {
      "ZED_FILENAME": "$ZED_FILENAME"
    },
    "cwd": "$ZED_DIRNAME",
    "use_new_terminal": false,
    "allow_concurrent_runs": false,
    "reveal": "always"
  }
]
```

and then in the keybindings map editing:
> ctrl+k ctrl+s

edit in keymap.json
and type:
```cpp
"f7": ["task::Spawn", { "task_name": "Compile and Run C++ (PowerShell)" }]
```
