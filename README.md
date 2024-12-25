# 프로젝트

- react-query를 쓰면서 **페이지 단위**로 **같은 시점**의 데이터를 바라보게하기
- `staleTime: Infinity`걸고, location.pathanme 바뀔때마다 data를 invalidate 시켜준다.
- api 호출횟수도 절약할 수 있고, 개발할때 고려할 사항도 많이 줄어들고 꽤 괜찮은데..?!

---

## TODO

- 무한스크롤에 대해
  - 아무리 생각해도 무한스크롤은 api 호출을 최소화하면서 유저의 스크롤 위치원복까지 깔끔하게 처리하기가 쉽지 않다.
  - https://github.com/TanStack/query/discussions/3576를 참고해서 maxPages 옵션을 넣어주거나(+ previousCursor에 대한 구현도 필요)
  - swr 진영에서처럼 첫번째 페이지만 재호출하고, 첫번째 페이지의 변동 여부에 따라 이후 페이지들의 호출 여부를 결정하는게 그나마 괜찮다. 예상치못한 엣지케이스들도 있긴하겠으나. (ex. 중간에 낑긴 애가 업데이트)
  - 중복 등을 방지하기 위해 global id로 관리하는 것도 나쁘지 않다.
