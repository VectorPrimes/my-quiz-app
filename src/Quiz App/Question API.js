const questions = [
    {
        government: [
            {
                id: "question1",
                question: "Which of the following is a fundamental principle of democratic governance?",
                optionA: "Centralized decision-making",
                optionB: "Censorship of the media",
                optionC: "Citizen Participation",
                optionD: "Authoritarianism",
                correctAns: "Citizen Participation"
            },
            {
                id: "question2",
                question: "Which of the following is not a source of public opinion?",
                optionA: "Opinion polls",
                optionB: "Academic Journals",
                optionC: "Social media",
                optionD: "Political parties",
                correctAns: "Academic Journals"
            },
            {
                id: "question3",
                question: "In a parliamentary system of government, the head of government is typically ___________.",
                optionA: "elected directly by the people",
                optionB: "the leader of the majority party in the legislature",
                optionC: "appointed by the judiciary",
                optionD: "chosen by the head of state",
                correctAns: "the leader of the majority party in the legislature"
            },
            {
                id: "question4",
                question: "The policy of 'indigenization' was introduced under the regime of?",
                optionA: "General Yakubu Gowon",
                optionB: "General Olusegun Obasanjo",
                optionC: "General Ibrahim Babangida",
                optionD: "General Sani Abacha",
                correctAns: "General Yakubu Gowon"
            },
            {
                id: "question5",
                question: "The constitutional amendment process in Nigeria requires the approval of",
                optionA: "The Independent National Electoral Commission(INEC)",
                optionB: "The National Assembly",
                optionC: "The President",
                optionD: "The Supreme Court",
                correctAns: "The National Assembly"
            },
            {
                id: "question6",
                question: "Whom is the current chairperson of ECOWAS?",
                optionA: "Bola Ahmed Tinubu",
                optionB: "Alassane Ouattara",
                optionC: "Macky Sall",
                optionD: "Nana-Akufo Ado",
                correctAns: "Bola Ahmed Tinubu"
            },
            {
                id: "question7",
                question: "During the cold war, Nigeria's foreign policy was characterized by",
                optionA: "alignment with the United States",
                optionB: "Neutrality and non-alignment",
                optionC: "Pursuit of colonial interest",
                optionD: "alignment with the Soviet Union",
                correctAns: "Neutrality and non-alignment"
            },
            {
                id: "question8",
                question: "Which of the following documents granted Nigeria its independence?",
                optionA: "The Lancaster House Agreement",
                optionB: "The Atlantic Charter",
                optionC: "The Nigerian Independence Act",
                optionD: "The United Nations Declaration on Decolonization",
                correctAns: "The Nigerian Independence Act"
            },
            {
                id: "question9",
                question: "Which of the following is a right associated with citizenship?",
                optionA: "Right to education",
                optionB: "Right to vote",
                optionC: "Right to privacy",
                optionD: "Right to property",
                correctAns: "Right to vote"
            },
            {
                id: "question10",
                question: "In a parliamentary system of government, the executive branch is",
                optionA: "under the control of the judiciary",
                optionB: "combined with the legislative branch",
                optionC: "elected through popular votes",
                optionD: "separate from the legislative branch",
                correctAns: "combined with the legislative branch"
            },
            {
                id: "question11",
                question: "What is the main source of funding for public corporations in Nigeria?",
                optionA: "Government budget allocations",
                optionB: "Foreign aid",
                optionC: "Revenues generated from their operations",
                optionD: "Donations from private companies",
                correctAns: "Government budget allocations"
            },
            {
                id: "question12",
                question: "Which of the following is a limitation of pressure groups?",
                optionA: "They only represent the interests of the wealthy.",
                optionB: "They have no influence on the government policies",
                optionC: "They may prioritize their own interests over the public interest",
                optionD: "They often resort to violent tactics",
                correctAns: "They may prioritize their own interests over the public interest"
            },
            {
                id: "question13",
                question: "Which of the following is a function of the Public Complaints Commission?",
                optionA: "Managing public transportation",
                optionB: "Enforcing criminal laws",
                optionC: "Conducting investigations and enquiries",
                optionD: "Implementing foreign policies",
                correctAns: "Conducting investigations and enquiries"
            },
            {
                id: "question14",
                question: "What is the term for a system of government in which power is held by a small group of people?",
                optionA: "Oligarchy",
                optionB: "Monarchy",
                optionC: "Theocracy",
                optionD: "Democracy",
                correctAns: "Oligarchy"
            },
            {
                id: "question15",
                question: "Which African country successfully resisted European imperialism and maintained its independence?",
                optionA: "Ghana",
                optionB: "Ethiopia",
                optionC: "Kenya",
                optionD: "Algeria",
                correctAns: "Ethiopia"
            },
            {
                id: "question16",
                question: "Which of the following is a feature of Nigerian Federalism?",
                optionA: "Single-party system",
                optionB: "Centralized fiscal system",
                optionC: "Autonomy of local government",
                optionD: "Strong central government",
                correctAns: "Autonomy of local government"
            },
            {
                id: "question17",
                question: "If the president refuses to sign a bill within a specific period, it can still become a law through",
                optionA: "legislative override",
                optionB: "none of the above",
                optionC: "judicial review",
                optionD: "public petition",
                correctAns: "legislative override"
            },
            {
                id: "question18",
                question: "Which document serves as the constitution of the United Nations?",
                optionA: "Universal Declaration of Human Right",
                optionB: "Geneva conventions",
                optionC: "Treaty of the Non-proliferation of Nuclear Weapons",
                optionD: "Charter of the United Nations",
                correctAns: "Charter of the United Nations"
            },
            {
                id: "question19",
                question: "Pressure groups primarily aim to",
                optionA: "promote social equality and justice",
                optionB: "gain political power and control",
                optionC: "influence public opinion through media campaigns",
                optionD: "disrupt the functioning of the government",
                correctAns: "influence public opinion through media campaigns"
            },
            {
                id: "question20",
                question: "In which system of government is the executive and legislature fused?",
                optionA: "Cabinet",
                optionB: "Presidential",
                optionC: "Unitary",
                optionD: "Federal",
                correctAns: "Cabinet"
            },
            {
                id: "question21",
                question: "Which of the following African leaders played a significant role in the formation of NEPAD?",
                optionA: "Julius Nyerere",
                optionB: "Nelson Mandela",
                optionC: "Muammar Gaddafi",
                optionD: "Robert Mugabe",
                correctAns: "Nelson Mandela"
            },
            {
                id: "question22",
                question: "Nigeria is a founding member of which regional organization?",
                optionA: "ECOWAS",
                optionB: "Non-aligned Movement",
                optionC: "OPEC",
                optionD: "IMF",
                correctAns: "ECOWAS"
            },
            {
                id: "question23",
                question: "The current constitution of Nigeria is based on the model of which country?",
                optionA: "Germany",
                optionB: "United States",
                optionC: "France",
                optionD: "United Kingdom",
                correctAns: "United States"
            },
            {
                id: "question24",
                question: "The arm of government responsible for budget approval and oversight is the",
                optionA: "judiciary",
                optionB: "executive",
                optionC: "administrative",
                optionD: "legislative",
                correctAns: "legislative"
            },
            {
                id: "question25",
                question: "A key principle of the socialist system of government is the ___________.",
                optionA: "minimal government intervention in the economy",
                optionB: "private ownership of the means of production",
                optionC: "power concentrated in the hands of a few elite individuals",
                optionD: "equality of opportunity and outcome",
                correctAns: "equality of opportunity and outcome"
            },
            {
                id: "question26",
                question: "In a communist system, who owns and controls the means of production?",
                optionA: "Corporations",
                optionB: "The government",
                optionC: "Private individuals",
                optionD: "Non-profit organizations",
                correctAns: "The government"
            },
            {
                id: "question27",
                question: "The National assembly is composed of how many chambers?",
                optionA: "Two",
                optionB: "Four",
                optionC: "One",
                optionD: "Three",
                correctAns: "Two"
            },
            {
                id: "question28",
                question: "Which of the following was a significant trade commodity in the pre-colonial Kingdom of Benin?",
                optionA: "Ivory",
                optionB: "Gold",
                optionC: "Rubber",
                optionD: "Salt",
                correctAns: "Ivory"
            },
            {
                id: "question29",
                question: "__________ was a major factor that contributed to the rise of the Sokoto Caliphate.",
                optionA: "Agricultural revolution",
                optionB: "Slave trade",
                optionC: "European colonization",
                optionD: "Islamic Jihad",
                correctAns: "Islamic Jihad"
            },
            {
                id: "question30",
                question: "Which political party was known for its socialist ideology and populist policies in the 1980s?",
                optionA: "People's Redemption party",
                optionB: "All Nigeria's People's Party",
                optionC: "National Party of Nigeria",
                optionD: "Nigerian National Democratic Party",
                correctAns: "People's Redemption party"
            }
        ],
        chemistry: [
            {
                id: "chemquestion30",
                question: "Which political party was known for its socialist ideology and populist policies in the 1980s?",
                optionA: "People's Redemption party",
                optionB: "All Nigeria's People's Party",
                optionC: "National Party of Nigeria",
                optionD: "Nigerian National Democratic Party",
                correctAns: "People's Redemption party"
            }
        ]
    }
    
]

export default questions