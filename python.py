n, k = map(int, input().split())
a = float('-inf')
for m in range(n):
    f,t = map(int, input().split())
    if t > k:
        x= f-(t-k)
    else:
        x=f
    a=max(a,x)
print(a)
