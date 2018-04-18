export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const textType  = domc.getType('text');
  const textModel = textType.model;
  const textView  = textType.view;

  domc.addType('text',{
    model: textModel.extend({
      defaults: Object.assign({}, textModel.prototype.defaults, {
        tagName: 'p',
        draggable: true,
        droppable: false,
      }),
    },
    {
      isComponent: function(el) {
        if(  el.tagName == 'P' ||
             el.tagName == 'H1' ||
             el.tagName == 'H2' ||
             el.tagName == 'H3' ||
             el.tagName == 'H4' ||
             el.tagName == 'H5'
          )
        {
          return {type: 'text'};
        }
      },
    }),
    view: textView
  });

}
