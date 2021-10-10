var store = [{
        "title": "Welcome to my repository",
        "excerpt":"It is the 1st content of my GitHub 1. 최초작성 This is first state of my repository: test project GitHub에서 작성한 최초의 글입니다. 2021-08-25 Wed 2. sidebar 만들고 수정 in 2021-09-09 Thr 3. category, sidebar 글자 크기 수정 category: (AI, ML, DL), (MATH, STAT), and blog 생성 sidebar의 글자 크기...","categories": ["Blog"],
        "tags": ["Blog","GitHub"],
        "url": "/blog/welcome/",
        "teaser": null
      },{
        "title": "Mathematics for machine learning - Chapter 1: Introduction and motivation",
        "excerpt":"머신러닝의 수학적 기초를 배운다는 것은 새 머신러닝 해법을 창조하고, 기존 접근법을 이해하고 오류를 해결하며, 방법론의 가정과 제약을 배우는 것을 촉진한다. - 그래서 중요하다. 1.1 Finding words for intuitions Summary We represent data as vectors. We choose an appropriate model, either using the probabilistic or optimization view. We learn from available...","categories": ["MATH"],
        "tags": ["mathematics","introduction","MML-book"],
        "url": "/math/chapter_1/",
        "teaser": null
      },{
        "title": "K-means algorithm의 간단한 원리",
        "excerpt":"출처: 수학과 함께하는 AI 기초 (Part III-1) data: https://www.kaggle.com/karangadiya/fifa19/version/4 K-Means 군집화 알고리즘의 동작 과정 알아보기 1단계: 표본 공간에 K개의 중심을 무작위로 생성하기 군집 (비슷한 특성을 지닌 데이터들의 집합)을 만들기 위해서 중심 (centroid)이 필요한데, 이유는 중심을 기준으로 가까운 거리의 점을 같은 군집에 포함할지 말지를 결정하기 때문 중심은 무작위로 생성하도록 한다. 2단계:...","categories": ["ML"],
        "tags": ["ML","algorithm"],
        "url": "/ml/kmeans/",
        "teaser": null
      },{
        "title": "iMac (Retina 5K, 27-inch, Late 2015) 고치기 (1)",
        "excerpt":"참조: https://support.apple.com/ko-kr/HT207584 Fixing process 1. 현상 초기화 후 Fusion Drive가 Finder에서 하나가 아닌 두 개의 드라이브로 표시되는 경우 더 이상 Fusion Drive로 작동하지 않는 것임 – 현저히 느림 2. 원인 초기화 하면서 소프트웨어를 사용하여 Fusion Drive를 의도적으로 별개의 볼륨으로 분할함 – 실수 3. 사태 파악 Apple 메뉴 &gt; 이 Mac에...","categories": ["Repair"],
        "tags": ["Blog","Fusiondrive","iMac","Late2015","Fixing"],
        "url": "/repair/repair/",
        "teaser": null
      },{
        "title": "K-NN algorithm의 간단한 원리",
        "excerpt":"출처: 수학과 함께하는 AI 기초 (Part III-2) data: https://www.kaggle.com/uciml/iris?select=Iris.csv K-Nearest neighbor algorithm알고리즘이란? 새로운 데이터가 들어왔을 때 특성 공간 내에 데이터 간의 거리가 가까운 데이터를 찾아서 그것의 레이블의 값으로 분류하는 알고리즘 K-NN 알고리즘을 이용한 붓꽃 분류기 분류기 정의: def 붓꽃 분류기 (분류하고 싶은 데이터, 분류된 데이터, K): 1) 분류하고 싶은 데이터와...","categories": ["ML"],
        "tags": ["ML","algorithm"],
        "url": "/ml/knn/",
        "teaser": null
      },{
        "title": "Regression algorithm의 간단한 원리",
        "excerpt":"출처: 수학과 함께하는 AI 기초 (Part III-3)   data1: https://data.kma.go.kr  data2: https://datalab.naver.com   1. 선형 회귀 모델의 이해   2. 좋은 직선을 찾는 기준, 평균제곱근오차 (RMSE)   3. 최소의 평균제곱근오차를 찾는 방법, 최소제곱법 (LSM)  ","categories": ["ML"],
        "tags": ["ML","algorithm"],
        "url": "/ml/regression/",
        "teaser": null
      },{
        "title": "사용하고 있는 python package의 version 확인하기",
        "excerpt":"1. 문제 가끔 사용하고 있는 python package가 update 되면서 사용하던 함수, 인자, 데이터 형태 등이 deprecated되는 경우가 있다. 이 때 package version을 보면 어디서 문제가 되었는지 인터넷 문서를 찾아서 고칠 수 있다. 하지만, 대신 사용할 수 있는 함수나 인자를 제안하더라도 이와 연결된 다른 package의 다른 함수가 그를 지원하지 않을 수...","categories": ["Coding"],
        "tags": ["Tips","Python"],
        "url": "/coding/version/",
        "teaser": null
      },{
        "title": "자동으로 시작되는 conda 환경 끄고/키기",
        "excerpt":"1. 배경 터미널을 실행하면 (base)가 앞에 붙는 경우가 있는데, 이는 Anaconda의 가상 환경 중 base가 항상 터미널 시작 시 같이 실행되기 때문이다. VS code로 R을 불러서 작업할 때가 있는데, R 터미널이 켜지면서 이미 R이 initialize 되었는데, conda의 activate 명령이 R에 씹혀서 같이 실행되어 error가 나는 것이 영 보기 싫었다. 사실...","categories": ["Coding"],
        "tags": ["Tips","Anaconda"],
        "url": "/coding/conda_base/",
        "teaser": null
      },{
        "title": "Mac 숨김 파일 보기/다시 숨기기",
        "excerpt":"터미널에서 사용 권한을 부여하는 방법도 있겠지만, Finder에서 단축키로 보고 다시 숨기고 하는 것이 가능하다.   command + shift + .: 숨김 파일 보기   다시 단축키  command + shift + .를 누르면 사라진다.  ","categories": ["Coding"],
        "tags": ["Tips","Mac"],
        "url": "/coding/hidden/",
        "teaser": null
      },{
        "title": "Introduction to SNOMED CT",
        "excerpt":"Chapter 1. Overview of SNOMED CT SNOMED는 acronym으로 Systematized Nomenclature of Medicine CT는 Clinical Terms의 acronym이다. SNOMED CT는 semantically interoperable polyhierarchical subtype multi-lexical clinical terminology system이다. : 무슨 말인지 모르겠다. capable of multi-language support, 그 구조 - reference terminology - 는 ‘reference features’를 추가하며 논리 기반의 subsumption과 clinical terms의 추출을...","categories": ["SToM"],
        "tags": ["SNOMED"],
        "url": "/stom/introduction/",
        "teaser": null
      }]
