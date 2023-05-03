export function filterWithTitle(data: any): any {
  return data.filter((item: any) => {
    return (
      item.hasOwnProperty("title") && item.title !== null && item.title !== ""
    );
  });
}
