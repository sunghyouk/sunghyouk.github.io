---
title:  ".gitignore 파일을 이용한 .DS_Store 전체 삭제 및 업로드 방지"
excerpt: gitignore 파일 설정하기

categories: Repair

tags: [gitignore, DS_Store]

date: 2021-10-11
last_modified_at: 2021-10-11

---

google 검색 키워드: github, DS_Store

맥에서 `github`를 이용하다보면 생기는 문제로, 함께 commit 되면서 불필요하게 공유되거나 귀찮게 파일 구조가 바뀌면 변경사항이 있다고 계속 list에 뜨게됨

윈도우의 `thumb.db` 파일과 유사하다.  
이는 프로젝트와 관련없는 파일로 `github`에 올리지 않아도 된다.

`github` 저장소의 가장 상위 디렉토리 내에서 하위 디렉토리까지 검색하며 `.DS_Store` 파일 삭제

```zsh
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```

앞으로 `.DS_Store`를 업로드 하지 않게 하려면 `.gitignore`에 아래와 같이 추가해서 무시하도록 만든다.

```vim
echo .DS_Store >> .gitignore
```

없으면 `.gitignore` 파일 만들기

```zsh
vi .gitignore
```

이에 더해서 나만 봐야 하는 word, excel, pdf, 용량이 큰 csv, 압축 파일 등도 같이 업로드를 방지하려면 `.gitignore`에 다음도 추가

```vim
*.DS_Store
*.docx
*.xlsx
*.pdf
*.csv
*.gz
```

그리고 나서, git에 추가해주기

```zsh
git add .
git commit -m '.DS_Store removed'
git push origin master
```

전역으로 저장소의 최상위 디렉토리로 이동하여 `.gitignore_global`을 만들어서 모든 저장소에 적용할 수 있는 방법도 있다.

```zsh
vi .gitignore_global
```

```vim
echo .DS_Store >> ~/.gitignore_global
```

이후,

```zsh
git config --global core.excludesfile ~/.gitignore_global
```

이 방법도 실험해 봤는데 잘 된다.
