'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { setTimeout } from 'timers';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "delayedcommand" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('delayedcommand.run', (args) => {
      const delay = args.delay;
      const action = args.command;
      if (delay === undefined || action === undefined) {
        vscode.window.showInformationMessage('A delay and an action have to be specified for this command to work!');
      } else {
        setTimeout(() => {
          // Support objects so that we can pass arguments from user settings to the commands
          if (typeof action === "object"){
            vscode.commands.executeCommand(action.command, action.args);
          }
          // Support commands as strings (no args)
          else{
            vscode.commands.executeCommand(action);
          }
        }, delay);  
      }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}