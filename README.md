# 프로젝트

- react-query를 쓰면서 **페이지 단위**로 **같은 시점**의 데이터를 바라보게하기
- `staleTime: Infinity`걸고, location.pathanme 바뀔때마다 data를 invalidate 시켜준다.
- api 호출횟수도 절약할 수 있고, 개발할때 고려할 사항도 많이 줄어들고 꽤 괜찮은데..?!
