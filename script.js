const sortable = new Sortable(sortableList, {
  animation: 150,
  ghostClass: 'sortable-ghost',
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
  onSort: function (e) {
    getOrder(); 
  },
});

let order = [];

const getOrder = () => {
  order = sortable.toArray().map(updateOrder);
  console.log('order:\n', order);
}

const updateOrder = (id, index) => ({ id, sortOrder:index + 1});

// converts "_id:a,sortOrder:1" into { _id:'a', sortOrder:'1' }
const parseDataId = (str) => (
  str.split(',').reduce((acc, item) => {
    const [ key, value ] = item.split(':');
    acc[key] = value;
    return acc;
  }, {})
);