window.LAB_ESTIMATOR_CONFIG = {
    clinicName: "Private Laboratory analysis - Fulfilled by CDL Laboratories",
    currency: "$",
    disclaimer: "This is an estimate, final pricing can vary.",

    // Top half: Panels
    panels: [
        {
            code: "CHP4",
            name: "COMPLETE PROFILE (CHP4)",
            description: "Glucose, creatinine, urea, calcium, total protein, uric acid, AST, ALT, GGT, albumin, alkaline phosphatase, electrolytes, total bilirubin, inorganic PO4, cholesterol, triglycerides, HDL & LDL cholesterol, urine analysis, CBC.",
            price: 230
        },
        {
            code: "CHL4",
            name: "BIOCHEMISTRY PROFILE #4 (CHL4)",
            description: "Glucose, creatinine, urea, calcium, total protein, uric acid, AST, ALT, GGT, albumin, alkaline phosphatase, electrolytes, total bilirubin, inorganic PO4, cholesterol, triglycerides, HDL & LDL cholesterol.",
            price: 170
        },
        {
            code: "CHM5",
            name: "BIOCHEM. PROFILE #2 + ELECTROLYTES (CHM5)",
            description: "Glucose, creatinine, urea, calcium, total protein, uric acid, AST, ALT, GGT, albumin, alkaline phosphatase, electrolytes, total and direct bilirubin, phosphate.",
            price: 140
        },
        {
            code: "BIO1",
            name: "BIOCHEMISTRY PROFILE #1 (BIO1)",
            description: "Uric acid, urea, ALT, creatinine, electrolytes, glucose.",
            price: 115
        },
        {
            code: "CVRK",
            name: "CARDIOVASCULAR PROFILE (CVRK)",
            description: "Cholesterol, triglycerides, HDL & LDL, non-HDL. Options: APOA, APOB",
            price: 95
        },
        {
            code: "LIV1",
            name: "LIVER PROFILE (LIV1)",
            description: "AST, ALT, GGT, total bilirubin, alkaline phosphatase.",
            price: 115
        },
        {
            code: "FERT",
            name: "FERTILITY PROFILE #1 (FERT)",
            description: "FSH, LH.",
            price: 150
        },
        {
            code: "MEN1",
            name: "MENOPAUSE PROFILE (MEN1)",
            description: "FSH, LH, estradiol.",
            price: 205
        },
        {
            code: "ANE1",
            name: "ANEMIA PROFILE #1 (ANE1)",
            description: "CBC, reticulocytes, total iron, UIBC, TIBC, saturation %. Option: Vitamin B12 & folic acid",
            price: 155
        },
        {
            code: "THY1",
            name: "THYROID PROFILE (THY1)",
            description: "TSH, free T4. Options: Thyroglobulin, Free T3, Thyroglobulin Ab, Anti-TPO",
            price: 150
        },
        {
            code: "STDMH",
            name: "PROFILE S.T.B.B.I. (STDMH)",
            description: "Chlamydia + gonorrhea by PCR, syphilis, HIV. Options: HCV, HBsAg",
            price: 255
        }
    ],

    // Bottom half: Individual tests by category
    categories: [
        {
            name: "Biochemistry",
            tests: [
                { code: "ALB", name: "Albumin", price: 52 },
                { code: "ALKP", name: "Alkaline phosphatase", price: 52 },
                { code: "ALT", name: "ALT", price: 52 },
                { code: "AMYL", name: "Amylase", price: 52 },
                { code: "APOB", name: "APOB", price: 87 },
                { code: "AST", name: "AST", price: 52 },
                { code: "CO2P", name: "Bicarbonate & total CO2", price: 62 },
                { code: "TBIL", name: "Bilirubin, total", price: 52 },
                { code: "DBIL", name: "Bilirubin, direct", price: 52 },
                { code: "CA", name: "Calcium", price: 52 },
                { code: "CAIP", name: "Calcium Ionise", price: 83},
                { code: "CHOL", name: "Cholesterol, total", price: 52 },
                { code: "HDL", name: "Cholesterol, HDL", price: 52 },
                { code: "CK", name: "CK", price: 70 },
                { code: "CREA", name: "Creatinine, incl. EGFR", price: 55 },
                { code: "CRPHS", name: "CRP, include H/S", price: 84 },
                { code: "ELEC", name: "Electrolytes NA, K, Cl", price: 85 },
                { code: "GGT", name: "GGT", price: 52 },
                { code: "GLU", name: "Glucose", price: 52 },
                { code: "2HGTT", name: "Glucose tolerance 2h", price: 95 },
                { code: "3HGTT", name: "Glucose tolerance 3h", price: 95 },
                { code: "GLHBP", name: "HbA1c", price: 90 },
                { code: "HCYS", name: "Homocysteine", price: 150 },
                { code: "HELI", name: "H. Pylori Serum", price: 108 },
                { code: "HPBT", name: "H. Pylori Breath", price: 200 },
                { code: "LD", name: "Lactate dehydrogenase", price: 69 },
                { code: "LASE", name: "Lipase", price: 60},
                { code: "MG", name: "Magnesium", price: 60 },
                { code: "PO4", name: "PO4 inorganic", price: 52 },
                { code: "SPEP", name: "Protein electrophoresis", price: 120 },
                { code: "QIFOB", name: "Quant. IFOB.", price: 110 },
                { code: "UREA", name: "Urea", price: 52 },
                { code: "URIC", name: "Uric acid", price: 52 }
            ]
        },
        {
            name: "Endocrinology",
            tests: [
                { code: "THAB", name: "Antithyroid antibodies", price: 120 },
                { code: "BHCG", name: "β-HCG, Quantitative", price: 83 },
                { code: "PREG", name: "β-HCG, Qualitative", price: 80 },
                { code: "NTPROBNP", name: "NT-Pro-BNP", price: 200 },
                { code: "C125", name: "Ca-125", price: 110 },
                { code: "SCORT", name: "Cortisol AM/PM", price: 83 },
                { code: "DH-S", name: "DHEA-S", price: 110 },
                { code: "ESTR", name: "Estradiol", price: 85 },
                { code: "FERR", name: "Ferritin", price: 92 },
                { code: "FOLC", name: "Folic acid", price: 82 },
                { code: "FT3", name: "Free T3", price: 88 },
                { code: "FT4", name: "Free T4", price: 90 },
                { code: "FSH", name: "FSH", price: 85 },
                { code: "LH", name: "LH", price: 85 },
                { code: "PROG", name: "Progesterone", price: 85 },
                { code: "PRLA", name: "Prolactin", price: 88 },
                { code: "PTH", name: "PTH", price: 145 },
                { code: "PSA", name: "PSA", price: 87 },
                { code: "FPSA", name: "PSA free and total", price: 140 },
                { code: "TEST", name: "Testosterone Total", price: 100 },
                { code: "TESBC", name: "Testosterone Bioavailable", price: 120 },
                { code: "TESFC", name: "Testosterone Free", price: 115 },
                { code: "TSH", name: "TSH", price: 105 },
                { code: "VB12", name: "Vitamin B12", price: 82 },
                { code: "25D", name: "Vitamin D-25 OH", price: 150 },
                { code: "FA12", name: "Vitamin B12 & folic acid", price: 140 }
            ]
        },
        {
            name: "Cytopathology / Microbiology",
            tests: [
                { code: "BIOP", name: "Biopsy", price: 220 },
                { code: "UCYT", name: "Urine cytology", price: 120 },
                { code: "PAPT", name: "ThinPrep Pap Test", price: 120 },
                { code: "HPV", name: "HPV DNA", price: 155 },
                { code: "TPPV", name: "HPV + reflex PAPT", price: 170 },
                { code: "CDIF", name: "CDIF toxin gene, PCR", price: 140 },
                { code: "VAGS", name: "Culture, strep B", price: 70 },
                { code: "CULS", name: "Traditional culture (stool)", price: 88 },
                { code: "STOOLPCR", name: "PCR method (stool)", price: 110 },
                { code: "CULV", name: "Traditional culture (vaginal)", price: 98 },
                { code: "PCRCULV", name: "PCR method (vaginal)", price: 115 },
                { code: "HSVPCR", name: "HSV 1 & 2 DNA PCR", price: 210 },
                { code: "PARA", name: "Ova & parasites with preservative", price: 105 },
                { code: "PARAPCR", name: "Ova & parasites without preservative", price: 120 },
                { code: "STPP", name: "Strep A rapid PCR reflex", price: 80 },
                { code: "STPCR", name: "Strep A, C & G PCR", price: 78 },
                { code: "CULT", name: "Strep A, C & G PCR & candida", price: 110 },
                { code: "TRIPCR", name: "Trichomonas vaginalis PCR", price: 89 },
                { code: "UTRIPCR", name: "Trichomonas PCR male urine", price: 89 }
            ]
        },
        {
            name: "Hematology",
            tests: [
                { code: "BLDT", name: "Blood group & Rh", price: 60 },
                { code: "CBC", name: "CBC with differential", price: 75 },
                { code: "HBEL", name: "Hb Electrophoresis", price: 110 },
                { code: "SEDI", name: "Sedimentation", price: 62 }
            ]
        },
        {
            name: "Urine",
            tests: [
                { code: "URC", name: "Urine analysis", price: 57 },
                { code: "URC+", name: "Urine culture and analysis", price: 90 },
                { code: "A/CU", name: "Microalbuminuria, urine", price: 95 }
            ]
        },
        {
            name: "Coagulation",
            tests: [
                { code: "PT", name: "PT including INR", price: 55 },
                { code: "PTT", name: "PTT", price: 58 }
            ]
        },
        {
            name: "Serology",
            tests: [
                { code: "ANA", name: "ANA", price: 95 },
                { code: "ASA", name: "Anti-muscles Lise", price: 105 },
                { code: "ALKM", name: "Anti-LKM", price: 115 },
                { code: "AMA", name: "Anti-mitochondria", price: 105 },
                { code: "A1AT", name: "Alpha-1-antitrypsin", price: 100 },
                { code: "AFP", name: "Alphafetoprotein", price: 85 },
                { code: "TRSG", name: "Anti-TTG", price: 95 },
                { code: "IGA", name: "IgA", price: 80 },
                { code: "CUBP", name: "Ceruloplasmin", price: 85 },
                { code: "HAVM", name: "HAV IgM", price: 105 },
                { code: "HAVG", name: "HAV IgG", price: 135 },
                { code: "HBAB", name: "HBsAb", price: 88 },
                { code: "HSAG", name: "HBsAg", price: 100 },
                { code: "HEPC", name: "HCV", price: 120 },
                { code: "HIV", name: "HIV", price: 95 },
                { code: "MONO", name: "Monotest", price: 60 },
                { code: "RA", name: "Rheumatoid factor", price: 72 },
                { code: "RUBE", name: "Rubella IgG", price: 95 },
                { code: "SYPEIA", name: "Syphilis", price: 80 }
            ]
        },
        {
            name: "Stool",
            tests: [
                {code: "QIFOB", name:"Occ. Blood / RSOSI", price: 110}
            ]
        },
            {
            name: "Urine 24h",
            tests: [
                {code: "CA/U", name:"Calcium Urin 24h", price: 55}
            ]
        }

    ]
};
