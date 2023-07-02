# Digital HanaRoan

## Team Members

|Role |Name  |Email                |Github                                         |
|-----|------|---------------------|-----------------------------------------------|
|Leader|민새미|msw4585@gmail.com    |[Github Link](https://github.com/petcu1004)    |
|Member|장주성|jjs7280@gmail.com    |[Github Link](https://github.com/jangjuseong)  |
|Member|성창호|kylesung0520@gmail.com|[Github Link](https://github.com/kylesung0520) |
|Member|한성훈|cnf101219@gmail.com  |[Github Link](https://github.com/seonghunhan)  |

## Project Description
금융권 개발자에 대한 관심으로 실제 대출 상품 이용과 관련하여 고민했고, 이에 대출 운영 간소화 및 수작업을 감소시키기 위해 관리자 시스템 및 간략한 사용자 화면을 구축

## 💻 기술 스택

### 개발 환경

| IDE                                                                                                            | JDK                                                                                                      | Build                                                                                                  | Database Tool |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|---------------|
| <img src="https://img.shields.io/badge/IntelliJ-000000?style=for-the-badge&logo=IntelliJIDEA&logoColor=white"> | <img  src="https://img.shields.io/badge/JDK 11-007396?style=for-the-badge&logo=Java&logoColor=white"> | <img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> | <img src="https://img.shields.io/badge/DataGrip-000000?style=for-the-badge&logo=JetBrains&logoColor=white"> |

### Frontend

| HTML                                                                                                 | CSS                                                                                               | JavaScript                                                                                                     | AJAX                                                                                                 |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> | <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"> | <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> | <img src="https://img.shields.io/badge/AJAX-0076D6?style=for-the-badge&logo=Microsoft Azure&logoColor=white"> |

| JSP                                                                                                 | 
|------------------------------------------------------------------------------------------------------| 
| <img src="https://img.shields.io/badge/JSP-ED8B00?style=for-the-badge&logo=Java&logoColor=white"> |

### Backend

| Java                                                                                                 | Servlet                                                                                               |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=Java&logoColor=white"> | <img src="https://img.shields.io/badge/Servlet-ED8B00?style=for-the-badge&logo=Java&logoColor=white"> |

### DevOps

| AWS                                                                                                     | RDS                                                                                                | Redis                                                                                                 | Nginx                                                                                                 | Reverse Proxy                                                                                                 | SSL                                                                                                |
|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"> | <img src="https://img.shields.io/badge/RDS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"> | <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white"> | <img src="https://img.shields.io/badge/Nginx-269539?style=for-the-badge&logo=Nginx&logoColor=white"> | <img src="https://img.shields.io/badge/Reverse Proxy-269539?style=for-the-badge&logo=Nginx&logoColor=white"> | <img src="https://img.shields.io/badge/SSL-721412?style=for-the-badge&logo=Let's Encrypt&logoColor=white"> |

### 협업

| GIT                                                                                                     | Notion                                                                                                |
|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> | <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> |

## Functional Description & Details

### <고객 홈>

1. 페이지 상단에 GNB가 제공된다. 
2. 로고 클릭 시 사용자 홈으로 이동한다.
3. 조회, 이체, 금융상품 등 메뉴 클릭 시 해당 페이지로 이동한다. (대출 상품 버튼만 작동)
4. 로그아웃 버튼 클릭 시 로그아웃 되며 로그인페이지로 이동한다.
5. 광고 및 추천상품 표시영역에서 사용자 개인의 성향 및 서비스 이용 로그 분석을 통해 적절한 상품에 대한 광고 및 추천
6. 광고 및 추천상품이 좌->우 방향 슬라이드 효과와 함께 노출된다.
7. 클릭 시 해당 상품상세페이지로 이동한다.
8. 로그인한 계정의 요약 정보를 한 눈에 쉽게 볼 수 있는 회원정보영역이 제공된다.
9. 고객의 회원정보가 요약되어 노출된다. 
10. 고객이 가입한 대출 상품의 대출 금액, 이자율, 상환 일정 및 대출 상태와 같은 세부 정보가 요약되어 노출된다.
11. 추천 서비스
    - 고객은 기입한 본인의 신용등급, 나이, 수입 등 개인정보와 같은 요소와 기록되는 행동로그를 기반하여 대출 상품을 추천 받을 수 있다.
    - 추천 알고리즘은 다음과 같다.
        - recommendations 테이블에서 최소 신용도 이상만 만족하면 top3개는 앞단에 노출
        - PV (Page Views)
            - PV 전체평균보다 높거나 income이 2400만원 미만 -> 5% 이상 추천
            - PV 전체평균보다 높거나 income이 2400만원 이상 -> 4% 이상 5% 미만 추천
            - PV 전체평균보다 낮거나 income이 2400만원 미만 -> 3% 이상 4% 미만 추천 
            - PV 전체평균보다 낮거나 income이 2400만원 이상 -> 3% 미만 추천
        - 위 조건에서 도출된 상품을 제외하고 신용도만 맞다면 모두 노출

### 대출상품 목록페이지

1. “전체”, “전(월)세”, “담보” 등 대출 상품 종류 별 Nav Bar가 노출되어 원하는 종류의 상품들을 조회 할 수 있는 편의 기능이 제공된다.
2. 대출상품 목록이 제공된다.
3. 상품의 상품명, 요약된 상품 상세정보가 노출된다.
4. 가입 신청을 원하는 상품을 클릭 시 해당 상품의 상세정보 페이지로의 이동 기능이 제공된다.

### 대출상품 상세페이지

1. 특정 대출 상품에 대한 자세한 정보를 제공하는 페이지
2. 상품 상세 정보 표시 영역은 선택한 대출 상품에 대한 상세 정보를 표시해야 합니다. 여기에는 대출 상품의 모든 매개 변수, 약관, 자격 기준 및 기타 관련 정보가 포함되어야 합니다.
3. 대출 상품 표시 목록
    - 상품명: 대출 상품명
    - (연체)이자율: 대출 상품의 연간 이자율. 이는 고정 금리 또는 시장 상황에 따라 변경되는 변동금리일 수 있음.
    - 대출 기간: 대출 상환 기간. 이것은 몇 달 또는 몇 년으로 표현될 수 있습니다.
    - 대출 한도: 본 대출 상품으로 빌릴 수 있는 최대 금액입니다.
    - 자격 기준: 차용인이 대출 상품에 대한 자격을 갖추기 위해 충족해야 하는 기준. (최소 신용 점수, 최소 소득)
4. 아래 대출 신청 버튼을 누르면 신청서 폼으로 이동하게 된다.
    - 신청서에는 신청 상품 정보, 고객 정보를 확인할 수 있고, 하단에 대출 금액을 입력하면 대출 신청이 완료된다.
    - 대출 금액이 대출 한도를 넘으면 신청이 되지 않는다.
    - 고객의 신용 점수가 최소신용점수보다 낮으면 신청이 되지 않는다.
    - 한 명의 고객이 같은 대출 상품을 여러번 신청은 가능하지만 관리자페이지에서 제한된다.
