forLoops(0);

function forLoops(i) {
  console.log('\n');
  console.log(`${i}`);
  console.log(`${JSON.stringify(process.memoryUsage())}` );
  if(i<10000000)
  {
    var site = {};
    site.name = 'IT笔录';
    site.domain = 'itbilu.com';

    // 这里是一个保存或更新等操作
    setTimeout(()=>{
	  console.log(i, site);
    }, 0)
    console.log(`${JSON.stringify(process.memoryUsage())}` );
    console.log('\n');
    //  process.nextTick(forLoops, i+=1);
     forLoops(i+=1);
  }
}