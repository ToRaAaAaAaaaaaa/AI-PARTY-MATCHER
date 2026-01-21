// 架空の立候補者データベース（群馬県版）
// 将来的にはボートマッチサイトのAPIから取得する想定
// ※デモ用の架空データです。実在の人物とは関係ありません。

export const candidates = [
  {
    id: "nakamura_kenji",
    name: "中村健司",
    party: "自由民主党",
    district: "群馬県第1区（前橋市）",
    age: 52,
    occupation: "元県議会議員",
    profile: "前橋市出身。県議会議員を4期務め、地域経済の活性化と農業振興に注力。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 4, comment: "財政健全化のため現状維持が必要" },
        minimum_wage: { answer: 3, comment: "中小企業への影響を考慮し段階的に" },
        corporate_tax: { answer: 2, comment: "地方企業の競争力維持のため据え置き" }
      },
      social: {
        same_sex_marriage: { answer: 3, comment: "慎重に議論を進めるべき" },
        selective_surname: { answer: 2, comment: "家族の一体感を重視" },
        gender_equality: { answer: 3, comment: "女性活躍推進は重要だが数値目標には慎重" }
      },
      education: {
        free_education: { answer: 3, comment: "財源確保が前提。段階的に検討" },
        teacher_workstyle: { answer: 4, comment: "教員の負担軽減は喫緊の課題" },
        digital_education: { answer: 5, comment: "デジタル人材育成は群馬の未来に不可欠" }
      },
      security: {
        defense_budget: { answer: 5, comment: "GDP2%は必要最低限。国民の安全を守る" },
        us_alliance: { answer: 5, comment: "日米同盟の深化が安全保障の基軸" },
        constitutional_amendment: { answer: 5, comment: "自衛隊明記で国防を明確化すべき" }
      },
      environment: {
        nuclear_power: { answer: 4, comment: "安全性確保の上で重要なエネルギー源" },
        carbon_neutral: { answer: 4, comment: "2050年カーボンニュートラルを着実に" },
        ev_promotion: { answer: 4, comment: "自動車産業との両立を図りながら推進" }
      }
    },
    key_policies: [
      "群馬県の農業振興・ブランド化推進",
      "防衛力の強化",
      "デジタル田園都市構想の推進",
      "中小企業支援の拡充",
      "道路インフラの整備"
    ]
  },
  {
    id: "takahashi_yuko",
    name: "高橋優子",
    party: "立憲民主党",
    district: "群馬県第2区（伊勢崎市・佐波郡）",
    age: 45,
    occupation: "元NPO代表・社会福祉士",
    profile: "伊勢崎市で子育て支援NPOを設立。多文化共生のまちづくりに取り組む。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 1, comment: "消費税5%への減税で家計を支援" },
        minimum_wage: { answer: 5, comment: "最低賃金1500円で地方の若者流出を防ぐ" },
        corporate_tax: { answer: 5, comment: "大企業への適正課税で再分配強化" }
      },
      social: {
        same_sex_marriage: { answer: 5, comment: "同性婚の法制化は人権問題として即時実現を" },
        selective_surname: { answer: 5, comment: "選択的夫婦別姓は当然の権利" },
        gender_equality: { answer: 5, comment: "クオータ制導入で政治の男女格差解消を" }
      },
      education: {
        free_education: { answer: 5, comment: "教育は権利。完全無償化と給食費無料化を" },
        teacher_workstyle: { answer: 5, comment: "教員増員と少人数学級の実現" },
        digital_education: { answer: 4, comment: "デジタル格差の解消が前提" }
      },
      security: {
        defense_budget: { answer: 1, comment: "防衛費増額より社会保障の充実を" },
        us_alliance: { answer: 3, comment: "対等な日米関係の構築を" },
        constitutional_amendment: { answer: 1, comment: "9条改正には反対。平和憲法を守る" }
      },
      environment: {
        nuclear_power: { answer: 1, comment: "原発ゼロを目指し再エネ100%へ" },
        carbon_neutral: { answer: 5, comment: "気候危機対策を最優先に" },
        ev_promotion: { answer: 4, comment: "EV推進と公共交通の充実を両立" }
      }
    },
    key_policies: [
      "子育て支援の抜本強化",
      "多文化共生社会の実現",
      "教育無償化の推進",
      "ジェンダー平等基本法の制定",
      "消費税減税"
    ]
  },
  {
    id: "kobayashi_taro",
    name: "小林太郎",
    party: "日本維新の会",
    district: "群馬県第3区（太田市・館林市周辺）",
    age: 38,
    occupation: "元IT企業経営者",
    profile: "太田市出身。IT企業を起業し売却後、政界へ。行政改革とデジタル化を訴える。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 2, comment: "消費税は軽減税率廃止の上で8%に" },
        minimum_wage: { answer: 4, comment: "生産性向上と合わせて引き上げ" },
        corporate_tax: { answer: 2, comment: "法人税減税で企業誘致、雇用創出" }
      },
      social: {
        same_sex_marriage: { answer: 4, comment: "同性婚は認める方向で議論を" },
        selective_surname: { answer: 4, comment: "個人の自由として認めるべき" },
        gender_equality: { answer: 4, comment: "機会の平等を重視" }
      },
      education: {
        free_education: { answer: 5, comment: "教育無償化は維新の看板政策" },
        teacher_workstyle: { answer: 4, comment: "民間人材の登用で教育改革" },
        digital_education: { answer: 5, comment: "プログラミング教育と起業家教育を" }
      },
      security: {
        defense_budget: { answer: 4, comment: "必要な防衛力は確保すべき" },
        us_alliance: { answer: 4, comment: "日米同盟重視、自主防衛力も強化" },
        constitutional_amendment: { answer: 5, comment: "憲法改正で自衛隊明記を" }
      },
      environment: {
        nuclear_power: { answer: 3, comment: "安全確認された原発は活用、将来的には依存度低下" },
        carbon_neutral: { answer: 4, comment: "技術革新でカーボンニュートラル達成" },
        ev_promotion: { answer: 5, comment: "規制緩和でEV・自動運転を加速" }
      }
    },
    key_policies: [
      "身を切る改革（議員報酬カット）",
      "教育無償化の実現",
      "行政のデジタル化推進",
      "規制改革・スタートアップ支援",
      "太田市の製造業DX支援"
    ]
  },
  {
    id: "yamamoto_sachiko",
    name: "山本幸子",
    party: "公明党",
    district: "群馬県第4区（高崎市）",
    age: 55,
    occupation: "元高崎市議会議員",
    profile: "高崎市議を5期務め、福祉政策のスペシャリスト。介護・医療の充実を訴える。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 3, comment: "軽減税率の維持と低所得者支援の拡充" },
        minimum_wage: { answer: 4, comment: "中小企業支援と合わせて段階的に引き上げ" },
        corporate_tax: { answer: 3, comment: "中小企業減税と大企業の適正負担" }
      },
      social: {
        same_sex_marriage: { answer: 3, comment: "当事者の声を聞きながら慎重に議論" },
        selective_surname: { answer: 3, comment: "旧姓使用の拡大で対応を検討" },
        gender_equality: { answer: 4, comment: "女性活躍推進を着実に" }
      },
      education: {
        free_education: { answer: 4, comment: "幼児教育無償化に続き高等教育支援拡充" },
        teacher_workstyle: { answer: 5, comment: "教員の働き方改革は急務" },
        digital_education: { answer: 4, comment: "一人一台端末の活用促進" }
      },
      security: {
        defense_budget: { answer: 4, comment: "抑止力強化は必要、外交努力も重視" },
        us_alliance: { answer: 4, comment: "日米同盟を基軸に平和外交を" },
        constitutional_amendment: { answer: 3, comment: "加憲の立場で慎重に議論" }
      },
      environment: {
        nuclear_power: { answer: 3, comment: "安全性最優先で依存度を下げつつ活用" },
        carbon_neutral: { answer: 4, comment: "地域の再エネ導入を支援" },
        ev_promotion: { answer: 4, comment: "充電インフラ整備を推進" }
      }
    },
    key_policies: [
      "介護サービスの充実",
      "医療費負担の軽減",
      "子育て支援の拡充",
      "高齢者の見守り体制強化",
      "高崎市の交通インフラ整備"
    ]
  },
  {
    id: "inoue_daiki",
    name: "井上大樹",
    party: "国民民主党",
    district: "群馬県第5区（渋川市・沼田市周辺）",
    age: 42,
    occupation: "元労働組合役員",
    profile: "渋川市出身。自動車部品メーカー勤務を経て労組活動に従事。働く人の視点で政策を訴える。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 2, comment: "消費税減税とトリガー条項凍結解除を" },
        minimum_wage: { answer: 5, comment: "最低賃金1500円で地方の生活を守る" },
        corporate_tax: { answer: 3, comment: "中小企業減税、大企業は応分負担" }
      },
      social: {
        same_sex_marriage: { answer: 5, comment: "同性婚の法制化を支持" },
        selective_surname: { answer: 5, comment: "選択的夫婦別姓の早期実現を" },
        gender_equality: { answer: 5, comment: "同一労働同一賃金の徹底" }
      },
      education: {
        free_education: { answer: 5, comment: "教育国債で教育無償化を実現" },
        teacher_workstyle: { answer: 5, comment: "教員の働き方改革と待遇改善" },
        digital_education: { answer: 5, comment: "デジタル教育で地方と都市の格差解消" }
      },
      security: {
        defense_budget: { answer: 3, comment: "現実的な防衛力整備、専守防衛堅持" },
        us_alliance: { answer: 4, comment: "日米同盟を基軸に自主外交も" },
        constitutional_amendment: { answer: 2, comment: "9条改正には慎重。議論を深める" }
      },
      environment: {
        nuclear_power: { answer: 2, comment: "原発依存度低減、再エネ拡大を優先" },
        carbon_neutral: { answer: 5, comment: "グリーン投資で雇用創出" },
        ev_promotion: { answer: 5, comment: "EV化で群馬の自動車産業を転換支援" }
      }
    },
    key_policies: [
      "給料が上がる経済政策",
      "ガソリン減税（トリガー条項発動）",
      "教育無償化",
      "電気代・ガス代の負担軽減",
      "北毛地域の観光振興"
    ]
  }
];

// 政策カテゴリの定義（日本語ラベル）
export const policyCategories = {
  economy: {
    label: "経済・財政",
    questions: {
      consumption_tax: "消費税の扱い",
      minimum_wage: "最低賃金の引き上げ",
      corporate_tax: "法人税の扱い"
    }
  },
  social: {
    label: "社会・人権",
    questions: {
      same_sex_marriage: "同性婚の法制化",
      selective_surname: "選択的夫婦別姓",
      gender_equality: "ジェンダー平等施策"
    }
  },
  education: {
    label: "教育",
    questions: {
      free_education: "教育無償化",
      teacher_workstyle: "教員の働き方改革",
      digital_education: "デジタル教育の推進"
    }
  },
  security: {
    label: "安全保障・外交",
    questions: {
      defense_budget: "防衛費の増額",
      us_alliance: "日米同盟の強化",
      constitutional_amendment: "憲法改正（9条）"
    }
  },
  environment: {
    label: "環境・エネルギー",
    questions: {
      nuclear_power: "原発政策",
      carbon_neutral: "カーボンニュートラル",
      ev_promotion: "EV普及促進"
    }
  }
};

export default candidates;
