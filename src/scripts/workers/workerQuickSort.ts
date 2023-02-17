self.onmessage = (event: MessageEvent<Array<number>>) => {
    const time = performance.now();
    self.postMessage(quickSort(event.data));
    console.log(`Quick sort = ${performance.now() - time}`)
}

const quickSort = (List: number[]): any => {
    if(List.length <= 1) {
        return List;
    }
    
    const pivot: number = List[List.length - 1];
    const leftList: number[] = [];
    const rightList: number[] = [];
    for(let i: number = 0; i < List.length - 1; i++) {
        if(List[i] < pivot) {
            leftList.push(List[i])
        } else {
            rightList.push(List[i])
        }
    }
    return [...quickSort(leftList), pivot, ...quickSort(rightList)];
}


export {}