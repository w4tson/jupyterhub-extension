import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  INotebookTracker,
  NotebookActions
} from '@jupyterlab/notebook';

import { ICommandPalette } from '@jupyterlab/apputils';

import { Cell, ICellModel } from '@jupyterlab/cells';

/**
 * Initialization data for the myextension extension.
 */
/**
 * Initialization data for the jupyterlab_apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-apod',
  description:
    'Show a random NASA Astronomy Picture of the Day in a JupyterLab panel.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, tracker: INotebookTracker) => {
    console.log('JupyterLab extension jupyterlab_apod is activated! too right');
    NotebookActions.executionScheduled.connect((_, args) => {
      // const notebook = args['notebook'];

      const cell: Cell<ICellModel> = args['cell'];
      // console.log(cell, notebook);
      // console.log(cell.model.executedCode);
      // Additional logic here...
      console.log(cell.model.toJSON());
      console.log(cell.model.sharedModel.source);
    });
  }
};

export default plugin;
