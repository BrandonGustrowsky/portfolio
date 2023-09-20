export const PROJECT_DATA = [
    {
        name: "VideoStar",
        description: `A video sharing platform where users can view a variety of short videos fetched from a third party API. Videos may be either free or priced where free videos can be
            favorited and watched, while priced videos are blurred and can be added to a cart where they can be purchased or removed. Purchased videos assume the same functionality
            as free videos.`,
        link: "https://github.com/BrandonGustrowsky/VideoStar",
        altText: "A graphic of a 3d looking tunnel",
        languages: ["React", "JavaScript", "MaterialUI"]
    },
    {
        name: "Edit Distance",
        description: `Given two strings, this program uses dynamic programming techniques to calculate the minimal number of edits needed to
            convert the first string into the second. In addition, it generates an edit string, which tells the user where
            a given modification to the first string took place.`,
        link: "https://github.com/BrandonGustrowsky/Edit-Distance",
        altText: "A graphic of a 3d looking tunnel",
        languages: ["Java"]
    },
    {
        name: "Huffman Encoding",
        description: `This project reads in a text file from the command line and converts its contents to
            one large string after removing all non-alphabetic characters. It nicely prints the number of times each letter
            occurs in the file and constructs a Huffman tree based on the frequency of those values. A Huffman encoding
            for each letter is derived from the tree followed by the fixed-width and variable-width Huffman encodings.`,
        link: "https://github.com/BrandonGustrowsky/Huffman-Encoding",
        altText: "A graphic of a binary tree, intended to represent a binary search tree.",
        languages: ["C++"]
    },
    {
        name: "EBay Desktop App",
        description: `Users can create an account based on the university they attend, view recently added products, search for products, and perform basic CRUD operations assuming they are
            authorized to do so. Data is stored in json files with multiple custom query functions accessing and modifying the data directly.`,
        link: "https://github.com/BrandonGustrowsky/EBay-Desktop-App",
        altText: "A graphic of a 3d looking tunnel",
        languages: ["Python", "PyQt5"]
    }
];

export const PROFESSIONAL_DATA = [
    {
        company: "Southern Adventist University",
        name: "ShareHim Content Authoring",
        description: `A hierarchicaly structured project management website. An authenticated and authorized user with no special
            permissions may view projects and presentations they have been added to contribute to them, as well as forums.
            Other roles include, but not limited to, presentation manager, project manager, and administrator.`,
        altText: "A graphic of a 3d looking tunnel",
        languages: ["PHP", "Yii2", "HTML", "CSS", "Ajax", "JQuery"]
    },
    {
        company: "Southern Adventist University",
        name: "Game Based Learning System",
        description: `A web app built for educators to use to assist in student learning using the adventure/task/reward based game structure.
        Game Based Learning implements a hierarchical user structure and implements RBAC. Specifically, I developed business
        frontend and backend logic for Organizations, Courses, Course Sections, and wrote several dozen tests.`,
        altText: "A graphic of a 4d looking tunnel",
        languages: ["PHP", "Yii2", "HTML", "CSS", "Ajax", "JQuery"]
    }
]