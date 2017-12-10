# Delayed Command

Allows delayed execution of a command

## Usage

The example below uses delayedcommand.run to close an annoying notification after 100ms making it mostly invisible ;-)

```json
    "macros": {
      "clojure_save_eval_esc": [
        "workbench.action.files.save",
        "clojureVSCode.eval",
        { "command": "delayedcommand.run", "args": { "delay": 100, "command": "workbench.action.closeMessages" }}
      ]
    },
```
