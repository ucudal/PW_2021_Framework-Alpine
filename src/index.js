const store = () => ({
  types: [
    {
      name: "planet",
      display: "Planets",
    },
    {
      name: "nebula",
      display: "Nebulas",
    },
    {
      name: "sky",
      display: "Sky Night",
    },
  ],
  pictures: [
    {
      type: "planet",
      url: "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1496&q=80",
    },
    {
      type: "planet",
      url: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
    },
    {
      type: "planet",
      url: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      type: "planet",
      url: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
    },
    {
      type: "planet",
      url: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      type: "nebula",
      url: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3007&q=80",
    },
    {
      type: "nebula",
      url: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1479&q=80",
    },
    {
      type: "nebula",
      url: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
    },
    {
      type: "nebula",
      url: "https://images.unsplash.com/photo-1615056906974-f167481eadd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80",
    },
    {
      type: "nebula",
      url: "https://images.unsplash.com/photo-1628155524928-35c02b8ac4d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5lYnVsYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      type: "sky",
      url: "https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    },
    {
      type: "sky",
      url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2113&q=80",
    },
    {
      type: "sky",
      url: "https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
    },
    {
      type: "sky",
      url: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
    },
    {
      type: "sky",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ],
  tab: "all",
});

Alpine.data("store", store);

Alpine.start();
