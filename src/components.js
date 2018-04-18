import loadText from './components/text';
import loadGrid from './components/grid';

export default (editor, config = {}) => {

  loadText(editor, config);
  loadGrid(editor, config);


  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;



  domc.addType('button', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'button',
        draggable: true,
        droppable: true,
        editable:true,
         traits: [{
             type:'text',
             label: 'link',
             name: 'src'
         }]
      }),
    },
   {
      isComponent: function(el) {
        if(el.tagName == 'BUTTON'){
          return {type: 'w3-button'};
        }
      },
    }),
    // Define the View
    view: defaultView
  });

}
