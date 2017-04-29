---
title: "My .zshrc (🍾 Happy New Year)"
date: "2016-12-31"
slug: "my-zshrc"
---

It is New Year’s Eve and I’m in bed fighting a cold, at the point where tweaking my _Terminal_ sounds productive. I wanted to share my minimal ZSH startup file in this _Gist_:

https://gist.github.com/iiroj/0260cdc01aaf1f1556150a9143293ee3

You can also find it pasted below, but I wouldn’t count on it being up-to-date.

## What happens in my _.zshrc_?

First, we need to download the necessary plugins. I only use five:

* [Lean](https://github.com/miekg/lean) — a nice, minimal theme
* [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) —  Shows greyed-out suggestions while typing, and you can fill it in by pressing →
* [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) — This, well, highlights syntax
* [zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search) — Better history search
* [zsh-completions](https://github.com/zsh-users/zsh-completions) — Completions for lots of programs’ sub-commands

After downloading the plugins, they are sourced. The completions need to be setup separately. I also enabled case-insensitive completion because I can’t be bothered with _Folder Names_.

I also set up deduplicated history that persists between sessions. Since I mostly repeat the same 10 or so tasks with Terminal, _history_ combined with the _zsh-autosuggestions_ plugin saves me plenty of time.

Finally, I bind the ↑/↓ to _history-substring-search_ for easier navigation, as well as set up an alias for _ls -l_.

## .zshrc

````bash
# Correctly display UTF-8 with combining characters.
if [ "$TERM_PROGRAM" = "Apple_Terminal" ]; then
	setopt combiningchars
fi

# Set shell variables
ZSH_FOLDER="$HOME/.zsh"

# Create zsh folder and install plugins
if [[ ! -d $ZSH_FOLDER ]]; then
  mkdir $ZSH_FOLDER
fi

if [[ ! -d $ZSH_FOLDER/lean ]]; then
  git clone https://github.com/miekg/lean.git $ZSH_FOLDER/lean
fi

if [[ ! -d $ZSH_FOLDER/zsh-autosuggestions ]]; then
  git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_FOLDER/zsh-autosuggestions
fi

if [[ ! -d $ZSH_FOLDER/zsh-syntax-highlighting ]]; then
  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_FOLDER/zsh-syntax-highlighting
fi

if [[ ! -d $ZSH_FOLDER/zsh-history-substring-search ]]; then
  git clone https://github.com/zsh-users/zsh-history-substring-search.git $ZSH_FOLDER/zsh-history-substring-search
fi

if [[ ! -d $ZSH_FOLDER/zsh-completions ]]; then
  git clone https://github.com/zsh-users/zsh-completions.git $ZSH_FOLDER/zsh-completions
fi

# Source plugins
source $ZSH_FOLDER/lean/lean.plugin.zsh
source $ZSH_FOLDER/zsh-autosuggestions/zsh-autosuggestions.zsh
source $ZSH_FOLDER/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source $ZSH_FOLDER/zsh-history-substring-search/zsh-history-substring-search.zsh

# Set Completions
autoload -Uz compinit && compinit
fpath=($ZSH_FOLDER/zsh-completions/src $fpath)
zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'

# Set history options
HISTFILE="$HOME/.zhistory"
HISTSIZE=1000
SAVEHIST=1000
setopt INC_APPEND_HISTORY
setopt HIST_SAVE_NO_DUPS
setopt HIST_VERIFY

# Bind keys
bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down

# Set aliases
alias ll="ls -l"
````
