const sortable = new Sortable(sortablelist, {
  animation: 150,
  ghostClass: 'sortable-ghost',
  onSort: function (e) {
    console.log('this id:', e.target.dataset.id);
    getOrder();
  },
});

const getOrder = () => {
  const order = sortable.toArray();
  console.log('order:', order);
}