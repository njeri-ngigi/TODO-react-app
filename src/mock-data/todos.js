const todoData = () => {
  const data = [];
  for (let i=0; i<10; i++) {
    data.push({
      date: new Date(),
      title: `${i} TODO`,
      description: 'This is a TODO description.'
    })
  }
  return data;
}

export default todoData();
