export default (editor, config = {}) => {

  const bm = editor.BlockManager;

  bm.add('row',{
    label: 'Row',
    category: 'Grid',
    attributes: {class:'fa fa-bars'},
    content:{
      type: 'row',
      classes:['w3-row'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('half-col',{
    label: '1/2 column',
    category: 'Grid',
    attributes: {class:'fa fa-columns'},
    content:{
      type: 'column',
      classes:['w3-half'],
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('third-col',{
    label: '1/3 Column',
    category: 'Grid',
    attributes: {class:'fa fa-pause'},
    content:{
      type: 'column',
      classes:['w3-third'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('twothird-col',{
    label: '2/3 Column',
    category: 'Grid',
    attributes: {class:'fa fa-pause'},
    content:{
      type: 'column',
      classes:['w3-twothird'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('quarter-col',{
    label: '1/4 Column',
    category: 'Grid',
    attributes: {class:'fa fa-pause'},
    content:{
      type: 'column',
      classes:['w3-quarter'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('threequarter-col',{
    label: '3/4 Column',
    category: 'Grid',
    attributes: {class:'fa fa-pause'},
    content:{
      type: 'column',
      classes:['w3-threequarter'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });

  bm.add('rest-col',{
    label: 'Rest Column',
    category: 'Grid',
    attributes: {class:'fa fa-pause'},
    content:{
      type: 'column',
      classes:['w3-rest'],
      content:'',
      style: {padding: '20px' },
      activeOnRender: 1
    }
  });


}
