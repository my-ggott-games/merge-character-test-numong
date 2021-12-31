/*  infoList index
0   누멍이
1   흰멍이
2   검멍이
3   너굴멍이
4   삽살이
5   얼룩이
6   바둑이
7   청설모
8   덕구
9   꿀꿀이
10  고양이
11  두더지
*/

const qnaList = [
    {
        q: '오늘은 쉬는 날! 뭐하고 놀까?',
        a: [
            {answer: '나가서 놀자!', type: ['0', '1', '3', '4', '6', '9']},
            {answer: '집에서 놀자!', type: ['2', '5', '7', '8', '10', '11']}
        ]
    },
    {
        q: '친구도 불러서 같이 놀까?',
        a: [
            {answer: '좋아! 같이 노는 게 더 재밌지.', type: ['0', '1', '3', '4', '6', '8']},
            {answer: '굳이...? 난 혼자가 좋아.', type: ['2', '5', '7', '9', '10', '11']},
        ]
    },
    {
        q: '나는 친구와 이야기 할 때 주로...',
        a: [
            {answer: '주로 말하는 걸 좋아해!', type: ['0', '3', '4', '10']},
            {answer: '주로 들어주는 걸 좋아해!', type: ['2', '9', '11']},
            {answer: '어떤 친구냐에 다르지!', type: ['1', '5', '6', '7', '8']},
        ]
    },
    {
        q: '친구와 장난칠 때를 떠올려볼까?',
        a: [
            {answer: '장난을 치는 편이야! ㅋㅋㅋ', type: ['2', '4', '8', '10']},
            {answer: '장난에 당하는 편이야... ㅠㅠ', type: ['0', '5']},
            {answer: '친구한테 장난치면 못써!', type: ['1', '3', '6']},
            {answer: '귀찮아.', type: ['7', '9', '11']}
        ]
    },
    {
        q: '자유와 규칙, 어떤 게 더 중요할까?',
        a: [
            {answer: '자유가 더 중요해!', type: ['3', '4', '5', '6', '7', '9', '10', '11']},
            {answer: '규칙이 더 중요해!', type: ['0', '1', '2', '8']},
        ]
    },
    {
        q: '친구들과 함께 있을 때 나는...',
        a: [
            {answer: '나를 따르라! 내가 대장이지!!', type: ['0', '3', '6']},
            {answer: '내 친구는 내가 챙긴다!', type: ['1', '7', '9',]},
            {answer: '쟤가 알아서 다 해주겠지 뭐~', type: ['2', '4', '5', '11']},
            {answer: '다들 어디 있어...? 나 또 미아 됐어...', type: ['8', '10']},
        ]
    },
    {
        q: '꽃, 좋아해? 선물 받으면 어때?',
        a: [
            {answer: '하루종일 행복할 거야ㅠㅠ', type: ['0', '1', '4', '8']},
            {answer: '뭐든 선물받으면 좋지!', type: ['2', '3', '5', '10', '9']},
            {answer: '차라리 돈으로 줘ㅠㅠ', type: ['6', '7', '10', '11']},
        ]
    },
    {
        q: '지금 책상을 보니...',
        a: [
            {answer: '잘 정돈되어 있어! 완벽해!', type: ['1', '6', '8']},
            {answer: '깨끗... 해! 근데 거긴 열어보면 안돼.', type: ['3', '7', '11']},
            {answer: '안 치운 게 아니라 제 자리에 둔 거야!', type: ['2', '5', '10']},
            {answer: '헤헤... 쉿!!', type: ['0', '4', '9']},
        ]
    },
    {
        q: '단골 카페에 새로운 음료가 나왔다면?',
        a: [
            {answer: '관심없다. 늘 마시던 게 좋다.', type: ['2', '6', '7', '8', '9', '11']},
            {answer: '이건 못 참지! 당장 주문해서 마셔본다.', type: ['0', '1', '4', '5']},
            {answer: '친구가 시키게끔 설득하고 뺏어 마신다.', type: ['3', '10']},
        ]
    },
    {
        q: '식사 도중 누군가의 음료가 쏟아졌다!',
        a: [
            {answer: '잽싸게 휴지를 꺼내 친구를 닦아준다.', type: ['1', '3', '6', '7']},
            {answer: '아이고 어떡해! 당황해서 얼어버린다.', type: ['0', '8']},
            {answer: '먹는 데 집중해서 몰랐어...', type: ['2', '9', '11']},
            {answer: '사실 그 음료 내가 쏟았어...', type: ['4', '5', '10']},
        ]
    },
    {
        q: '시험 하루 전날 밤을 떠올려볼까?',
        a: [
            {answer: '불안해ㅠㅠ 밤 새서 공부 더 하자.', type: ['3', '5', '6']},
            {answer: '난 할 만큼 했다. 이만 자자!', type: ['1', '2', '7', '11']},
            {answer: '그때 그때 달라.', type: ['8', '9', '10']},
            {answer: '내일이 시험이라고...?', type: ['0', '4']},
        ]
    },
    {
        q: '절친의 생일! 어떻게 축하해줄까?',
        a: [
            {answer: '필요한 것을 선물한다.', type: ['6', '7', '11']},
            {answer: '어울릴 만한 것을 선물한다.', type: ['0', '1', '5', '8', '10']},
            {answer: '밥을 산다.', type: ['2', '9']},
            {answer: '친구들을 모아 깜짝 파티를 한다.', type: ['3', '4']},
        ]
    }
]

const bonusList = [
    {
        qBonus: '어떤 문구가 가장 마음에 드나요?',
        aBonus: [
            {answer: '천진난만 순진무구', type: ['0']},
            {answer: '따뜻한 행동대장', type: ['1']},
            {answer: '천하태평 무념무상', type: ['2']},
            {answer: '임기응변 언어의 마술사', type: ['3']},
            {answer: '복슬복슬 친화력 만렙', type: ['4']},
            {answer: '조용한 럭비공', type: ['5']},
            {answer: '똑 부러지는 리더', type: ['6']},
            {answer: '빠릿빠릿 똑똑이', type: ['7']},
            {answer: '자유도 좋지만 집도 좋아', type: ['8']},
            {answer: '겉차속따 밥돌이', type: ['9']},
            {answer: '못 말리는 말괄량이', type: ['10']},
            {answer: '집콕이 제일 좋아', type: ['11']}
        ]
    }
]

const infoList = [
    {
        name: '"흰멍아, 좋은 생각이 났어." -누멍이',
        desc: '순진한 시골 강아지 누멍이는' + '\n' + '아랫마을에서 할머니와 함께 살아요.' + '\n' + '흰멍이와 검멍이도 함께요!' + '\n' +
            '누멍이는 침대도 뼈다귀도 다 좋아하지만' + '\n' + '할머니의 분홍색 양말을 물면서 노는 걸' + '\n' + '제일 좋아하는 강아지예요.' + '\n' +
            '어떤 친구와 만나든 순수하고 따뜻하게' + '\n' + '대하는 누멍이의 성격 덕분에' + '\n' + '누구든 누멍이에게 마음을 곧잘 열게 된답니다.' + '\n' +
            '가끔 눈 대신 흙을 먹을 만큼' + '\n' + '덜렁거리기도 하지만 괜찮아요' + '\n' + '그런 순박함이 누멍이의 매력이니까요!'+ '\n\n' +
            '누멍이와 친해지고 싶다면...' + '\n' + '할머니의 양말과 함께라면' + '\n' + '누멍이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BwCryD8nBdx/'
    },
    {
        name: '"밥 말고 얼룩이를 도와줘!" -흰멍이',
        desc: '똑똑한 시골 강아지 흰멍이는' + '\n' + '아랫마을에서 할머니와 함께 살아요.' + '\n' + '누멍이와 검멍이도 함께요!' + '\n' +
            '친구들을 배려하며 먹을 것을 나눠주기도 하고,' + '\n' + '긴급한 문제가 생겼을 때 직접' + '\n' + '발로 뛰어다니며 해결하는 성격이에요.' + '\n' +
            '도움이 필요한 친구를 위해' + '\n' + '용기를 내어 낯선 길로 모험을 떠날' + '\n' + '정도로 씩씩한 마음씨를 가졌어요.' + '\n' +
            '흰멍이는 생각보다 아침잠이 많은데' + '\n' + '워낙 검멍이가 잠이 많아 티가 잘 안나요!'+ '\n\n' +
            '흰멍이와 친해지고 싶다면...' + '\n' + '흰멍이의 배려에 감사를 표한다면' + '\n' + '흰멍이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BvMYr2aHTPX/'
    },
    {
        name: '"별은 달 부스러기일까?" -검멍이',
        desc: '잠이 많은 시골 강아지 검멍이는' + '\n' + '아랫마을에서 할머니와 함께 살아요.' + '\n' + '누멍이와 흰멍이도 함께요!' + '\n' +
            '밥을 먹다 잠이 들어 끼니를' + '\n' + '이어서 먹기도 하고 밤에 잠이 안 올' + '\n' + '정도로 낮잠을 많이 잔 적도 있어요.' + '\n' +
            '검멍이는 자연의 풍경을' + '\n' + '감상하는 것도 무척 좋아해요.' + '\n' + '감상하다 깜박 졸아도 모른 척 해주자구요!' + '\n' +
            '느긋하고 태평한 검멍이와 함께' + '\n' + '낮잠을 즐겨보는 건 어떤가요?'+ '\n\n' +
            '검멍이와 친해지고 싶다면...' + '\n' + '할머니의 양말과 함께라면' + '\n' + '검멍이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BvpDX6fnwDQ/'
    },
    {
        name: '"나.. 난 옆동네 강아지야." -너굴멍이',
        desc: '수다 떨기 좋아하는 너굴멍이는' + '\n' + '엄마랑 밭 건너 도로 건너 뒷산에 살아요.' + '\n' +
            '너굴멍이와 함께라면 어색할 틈 없이 대화가 '+ '\n' + '끊이질 않아 즐거운 시간을 보낼 수 있어요!'+ '\n' +
            '상황판단이 뛰어나 친구를 잘 도와주고' + '\n' + '자연에 대해 아는 것도 많은 친구랍니다.' + '\n' +
            '그리고 엄마를 생각하는 마음이 깊어' + '\n' + '밥을 구하면 엄마 몫을 잊지 않고 꼭 챙겨요.' + '\n' +
            '사실 너굴멍이는 강아지가 아니라 너구리예요.' + '\n' + '쉿! 우리끼리만 아는 비밀이에요.' + '\n\n' +
            '너굴멍이와 친해지고 싶다면...' + '\n' + '이야기를 잘 들어준다면' + '\n' + '너굴멍이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BsGOFedHuEh/'
    },
    {
        name: '"흐흐, 여기 강아지 많아." -삽살이',
        desc: '친구 사귀기 좋아하는 시골 강아지 삽살이는' + '\n' + '살고 싶은 곳, 가고 싶은 곳을 돌아다니며' + '\n' + '자유롭게 살아요. 바둑이와 얼룩이도 함께요!' + '\n' +
            '집 없이 자유롭게 살면 밥을' + '\n' + '제때 못 먹고 굶을까봐 걱정된다구요?' + '\n' + '아저씨가 밥을 챙겨주시니 굶을 걱정 없어요.' + '\n' +
            "삽살이 사전에 '낯가리다' 라는 말은 없어요!" + '\n' + "처음 보는 친구에게도 스스럼없이 다가가" + '\n' + "금방 친해지는 친화력 대장이랍니다." + '\n' +
            '조금 덜렁거리지만 괜찮아요. 귀여우니까요!' + '\n\n' +
            '삽살이와 친해지고 싶다면...' + '\n' + '삽살이와 같이 있기만 해도' + '\n' + '삽살이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BvZlzc0nBgM/'
    },
    {
        name: '"할머니한테도 고맙다고 해줘." -얼룩이',
        desc: '얌전한 시골 강아지 얼룩이는' + '\n' + '살고 싶은 곳, 가고 싶은 곳을 돌아다니며' + '\n' + '자유롭게 살아요. 바둑이와 삽살이도 함께요!' + '\n' +
            '집 없이 자유롭게 살면 밥을' + '\n' + '제때 못 먹고 굶을까봐 걱정된다구요?' + '\n' + '아저씨가 밥을 챙겨주시니 굶을 걱정 없어요.' + '\n' +
            '얼룩이와 함께 있으면 주의를 기울여야 해요.' + '\n' + ' 깜빡 한눈 판 사이 호기심 많은 얼룩이가' + '\n' + ' 어디론가 사라졌다가 병에 머리가 낀 채' + '\n' + '도와달라며 나타날지도 몰라요!' + '\n' +
            '얼룩이는 데자와색 얼룩이 있어서 얼룩이래요~' + '\n\n' +
            '얼룩이와 친해지고 싶다면...' + '\n' + '병에 끼인 얼룩이를 빼줄 수 있다면' + '\n' + '얼룩이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/Bvj4tIgnlVV/'
    },
    {
        name: '"그래, 자유라는 거야!" -바둑이',
        desc: '똑 부러지는 시골 강아지 바둑이는' + '\n' + '살고 싶은 곳, 가고 싶은 곳을 돌아다니며' + '\n' + '자유롭게 살아요. 삽살이와 얼룩이도 함께요!' + '\n' +
            '집 없이 자유롭게 살면 밥을' + '\n' + '제때 못 먹고 굶을까봐 걱정된다구요?' + '\n' + '아저씨가 밥을 챙겨주시니 굶을 걱정 없어요.' + '\n' +
            '바둑이는 한눈 판 사이' + '\n' + '삽살이와 바둑이에게 무슨 일이' + '\n' + '생길까봐 늘 주의를 기울이고 있어요.' + '\n' + '친구들을 잘 챙겨주고 책임감도 강하답니다!' +
            '바둑이와 친해지고 싶다면...' + '\n' + '비둑이와 친구들을 돌봐주면' + '\n' + '바둑이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/Bvep70bn9db/'
    },
    {
        name: '"너는 운이 좋았어." -청설모',
        desc: '눈치도 몸놀림도 재빠른 청설모는' + '\n' + '길 건너 뒷산의 나무 위에서 살아요.'+ '\n' +
            '겨울잠을 자는 다람쥐와 달리,' + '\n' + '청설모는 겨울에도 깨어 있어' + '\n' + '도토리를 찾아 돌아다녀요.'+ '\n' +
            '청설모는 눈치가 빠른 만큼' + '\n' + '머리도 좋고 계산도 빠르기 때문에' + '\n' + '곁에 있으면 든든한 친구랍니다.' + '\n' +
            '겉으로는 무심한 척 하지만' + '\n' + '속이 깊어 친구들을 잘 챙겨줘요.' + '\n' +
            '청설모와 친해지고 싶다면...' + '\n' + '도토리와 함께라면' + '\n' + '청설모와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BuOw502HxHj/'
    },
    {
        name: '"내 이름은 덕구야!" -덕구',
        desc: '달리기를 좋아하는 덕구는' + '\n' + '할아버지와 함께 길 건너 뒷산 너머' + '\n' + '건넛마을 앞마당에 살고 있어요.' + '\n' +
            '집 밖으로 나와 뛰어다니는 것도,' + '\n' + '친구들과 노는 것도 좋아하지만 목줄이' + '\n' + '막대기에 묶여 있어 멀리까지 갈 수 없어요.' + '\n' +
            '괜찮아요! 친구들이 자주 놀러오고,' + '\n' + '땅을 파고 묶인 목줄을 빼내면' + '\n' + '덕구도 자유의 몸이 될 수 있어요.' + '\n' +
            '그래도 덕구는 떠나지 않아요.' + '\n' + '할아버지를 많이 좋아하니까요!' + '\n\n' +
            '덕구와 친해지고 싶다면...' + '\n' + '덕구와 함께 산책하면' + '\n' + '덕구와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BsnucK8HZV4/'
    },
    {
        name: '"누멍.. 누멍!" -꿀꿀이',
        desc: '꿀꿀이는 밥을 좋아하는 멧돼지예요.' + '\n' + '엄마와 함께 길 건너 뒷산에서 살아요.' + '\n' +
            '밥을 찾아 무섭게 달려가는 모습이' + '\n' + '겁이 나 다가가기 힘들다구요?'  + '\n' + '천만에요! 무서워하지 말아요.' + '\n' +
            '진심을 다해 고마움을 표현할 줄 알고,' + '\n' + '등에 친구를 태우고 동네를 달리며' + '\n' + '놀 정도로 정이 많고 따뜻한 친구랍니다.' + '\n' +
            '좋으면 좋다! 싫으면 싫다!' + '\n' + '꿀꿀이는 호불호가 뚜렷한 친구이기도 해요.' + '\n' + '하지만 밥은 언제나 좋아한답니다.' + '\n\n' +
            '꿀꿀이와 친해지고 싶다면...' + '\n' + '밥과 함께라면' + '\n' + '꿀꿀이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BtTeT7Rno2P/'
    },
    {
        name: '"엄마..." -고양이',
        desc: '호기심이 왕성한 고양이는' + '\n' + '엄마와 함께 아랫마을에 살고 있어요.' + '\n' +
            '고양이는 아직 아가라 엄마 곁에' + '\n' + '있어야 하지만 호기심이 워낙 많아' + '\n' + '다른 곳에 집중하다 보면 금방 미아가 되곤 해요.' + '\n' +
            '친구들에게 올라타는 걸 좋아하고' + '\n' + '장난 치고 어지르는 것도 좋아해요.' + '\n' + '마음에 들지 않는 일이 생기면' + '\n' + '바로 냥냥펀치를 날려버려요.' + '\n' +
            '하지만 냥냥펀치를 맞았다고 해도' + '\n' +'아무도 고양이를 미워할 수 없어요.' + '\n' +'고양이는 귀여우니까요!' + '\n\n' +
            '고양이와 친해지고 싶다면...' + '\n' + '고양이와 함께 놀아준다면' + '\n' + '고양이와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/BsYWx5BnLvd/'
    },
    {
        name: '"나는 두더지야. 땅 속에 살아." -두더지',
        desc: '두더지는 아랫마을 땅 속에 살고 있어요.' + '\n' + '혼자 있는 걸 좋아하죠!' +
            '두더쥐는 친구들과 노는 걸 귀찮아해요.' + '\n' + '친구들이 자신을 부르는 것도 귀찮고' + '\n' + '땅 밖으로도 잘 나오지 않아요.' + '\n' +
            '혼자 무얼 하는지 바쁘게 사는 바람에' + '\n' + '두더지를 먼저 부르지 않으면 알 수가 없어요.' + '\n' +
            '하지만 우린 알아요. 혼자 있는' + '\n' + '시간을 갖는 건 친구들을 만나는 것' + '\n' + '만큼이나 중요한 일이라는 걸요!' + '\n\n' +
            '두더지와 친해지고 싶다면...' + '\n' + '혼자만의 여유를 존중해준다면' + '\n' + '두더지와 금방 친해질 수 있어요!',
        link: 'https://www.instagram.com/p/Br0TclGH1HD/'
    },
]
