const myObservable = of(1,2,3);

const myObserver = {
    next: x => console.log('Observer got a next value: '+x),
    error: err => console.error('Observer got an error: '+err),
    complete: () => console.log('Observer got an complete notification.')  
};

myObservable.subscribe(myObserver);
