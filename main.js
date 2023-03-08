var a=[6,6,7,34,4,2];
function sndlarge(a)
{
	for(i=0;i<a.length;i++)
	{
		for(j=i+1;j<a.length;j++)
		{
			if(a[i]>a[j])
			{
				temp=a[j];
				a[j]=a[i];
				a[i]=temp;
			}
		}
	}
	let sndlargenum=a[1];
	return sndlargenum;
}
console.log(sndlarge(a))