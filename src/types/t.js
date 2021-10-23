let t = () => {
  let data = {};
  let routers = [];
  let handler = {
    get(_, name) {
      if (["get"].includes(name))
        return () => {
          console.log(routers.join("/"));
        };
      routers.push(name);
      return new Proxy(_, handler);
    },
  };
  return new Proxy(data, handler);
};
