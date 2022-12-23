// export const 





export const checkWord = (checker: string, checkee: string): boolean => {
   let c = checkee.toLowerCase().trim()
   return (checker === c)
}


























export const gameWords: string[] = [

   "doctor",
   "psalmist",
   "cytoplasm",
   "reward",
   "yesterday",
   "timing",
   "operation",
   "surgeon",
   "arsenal",
   "weapons",
   "environment",
   "condensation",
   "genius",
   "hummingbird",
   "university",
   "excruciating",
   "development",
   "eisenmenger",
   "hypercholesterolemia",
   "peace",
   "warpath",
   "rhomboid",
   "truncate",
   "override",
   "schism",
   "lucky",
   "marriage",
   "celebration",
   "fundamental",
   "citizenship",
   "revenue",
   "summary",
   "economy",
   "challenge",
   "conflict",
   "extremist",
   "malignancy",
   "coordination",
   "cognitive",
   "peroxisome",
   "periscope",
   "nosemask",
   "kilmanjaro",
   "football",
   "hemoglobin",
   "psychology",
   "entrepreneurship",
   "friend",
   "planetarium", "journalism", "amalgamation", "chylomicron", "genus",
   "armaggedon", "recreation", "lincoln", "youth", "flower", "interdenominational", "trapezium",
   "mapleleaf", "pisiform", "panther", "widow", "aristotle", "testosterone",
   "marigold", "carina", "trachea", "iatrogenic", "anasthesia", "fibrinogen",
   "aeration", "amazing", "humanoid", "osteology", "schistosomiasis", "plateau",
   "interactionalism", "newtonian", "hernia", "saccharin", "hydroxyquinone", "idiopathic",
   "blastocyst", "fantastic", "arachnid", "neanderthals", "riverine", "vitiligo",
   "complaint", "relinquish", "forgo", "forsake",
   "fluster", "disconcert", "discomfort", "discompose",
   "renounce", "abandon",
   "spur", "incite",
   "curtail", "diminish", "retrench",
   "protract", "elongate", "amplify",
   "annul", "nullify", "rescind", "void",
   "temperate",
   "scholastic",
   "demur",
   "concord", "concurrence",
   "caustic", "acerb", "pungent", "tart", "mordant", "acrid",
   "perspicacity", "discernment", "perception",
   "chide", "caution", "reprimand", "reprehend", "reproach",
   "cohort", "confederate", "ally", "accomplice",
   "affliction", "mischance", "reverses",
   "functionalism", "auscultation", "pheromones", "penicillin",
   "glycerine", "ephemeral", "hemoptysis", "infection",
   "sunderland", "parturition", "conclusion", "differential",
   "signature", "inguinal", "murderer", "guidelines",
   "smoking", "orchid", "meconium", "restrictive",
   "cancer", "complications", "aspirin", "acetaminophen",
   "biological", "chemical", "cardiovascular", "palpation",
   "polycythemia", "somatopleuric", "humanity", "predisposed",
   "terminal", "caliphate", "hyperlipidemia", "hematuria",
   "painful", "infective", "arthropods", "oncogenetics",
   "socrates", "tropical", "sphygmomanometer", "tenderness",
   "obstetrics", "hemochromatosis", "centrifuge", "resonance",
   "zenith", "urethra", "aristocrat", "republican",
   "penicillamine", "character", "obstructive", "prophylactic",
   "puzzle", "sociology", "lumefatrine", "examination",
   "oedema", "fistula", "splanchnopleuric", "pulmonary",
   "histology", "enterocyte", "hemangiopericytoma", "investigate",
   "hyperbilirubinemia", "jaundice", "urinalysis", "hispanic",
   "mycology", "musculature", "culture", "thoracocentesis",
   "morphology", "ruby", "neurology", "keratinized", "blood",
   "striped", "capacity", "carbonated", "psoas", "enema", "quantum",
   "inflation", "hamilton", "lensing", "ultrasonography",
   "amputation", "kymograph", "tomography", "matriculation",
   "rhesus", "colonoscopy", "amyloidosis", "reticulocyte",
   "homeostasis", "hemostasis",
   "civil", "complaisant", "benign", "gracious", "genial", "urbane", "cordial",
   "curt", "brusque", "rude", "boorish", "surly",
   "opulent", "profuse", "destitute", "impecunious",
   "bumptious", "officious", "obtrusive",
   "meek", "humble", "retiring", "diffident",
   "celerity", "briskness", "energy", "animation",
   "apathy", "nonchalance", "sluggishness", "lethargy", "phlegmatism", "paradigm",
   "appease", "alleviate", "pacify", "assuage", "abate", "mitigate", "propitiate", "mollify", "placate",
   "intensify", "aggravate",
   "insinuate", "intimate", "imply", "refer", "cite",
   "allure", "lure", "decoy", "inveigle", "entice", "seduce", "wheedle", "beguile", "cajole",
   "hazy", "obscure", "equivocal", "dubious", "nebulous",
   "explicit", "unquestionable", "amenable", "ambiguous",
   "amenable", "tractable", "docile", "responsive",
   "intractable", "refractory", "recalcitrant",
   "complaisant", "amiable", "anachronism"



]