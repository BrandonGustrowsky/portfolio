export const PROJECT_DATA = [
    {
        name: "Bundle Marketplace",
        description: `The core concept of this platform is to facilitate the sale of items among students attending the same college. It is specifically designed for college students,
        who can create accounts using their college or university email addresses. Within the platform, users have the capability to view and purchase items listed by other students
        from their own institution. They can also post their own items for sale and engage in direct messaging with other users. This platform's primary purpose is to centralize and streamline the buying
        and selling of items on campus that tend to be either relevant to their courses or pose challenges when it comes to long-distance shipping.`,
        link: "",
        altText: "Undefined",
        isPrivate: true,
        languages: ["NestJs", "MySQL", "TypeScript", "React", "MaterialUI"]
    },
    {
        name: "VideoStar",
        description: `A video sharing platform where users can view a variety of short videos fetched from a third party API. Videos may be either free or priced where free videos can be
            favorited and watched, while priced videos are blurred and can be added to a cart where they can be purchased or removed. Purchased videos assume the same functionality
            as free videos.`,
        link: "https://github.com/BrandonGustrowsky/VideoStar",
        altText: "A graphic of a 3d looking tunnel",
        isPrivate: false,
        languages: ["React", "JavaScript", "MaterialUI"]
    },
    {
        name: "Edit Distance",
        description: `Given two strings, this program uses dynamic programming techniques to calculate the minimal number of edits needed to
            convert the first string into the second. In addition, it generates an edit string, which tells the user where
            a given modification to the first string took place.`,
        link: "https://github.com/BrandonGustrowsky/Edit-Distance",
        altText: "A graphic of a 3d looking tunnel",
        isPrivate: false,
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
        isPrivate: false,
        languages: ["C++"]
    },
];

export const PROFESSIONAL_DATA = [
    {
        company: "U.S. Xpress, Inc.",
        name: "Project Management System",
        description: `A web based application designed for managers of teams in Operations, Sales, Brokerage, Account Management, etc. to delegate tasks and manage their teams. Features
        included 1) CRUD operations on teams, projects, tasks, 2) assigning a task to a team member, 3) moving a task through different stages of completion (i.e. 'assigned', 'in progress', and 'done').
        The app was also hooked in to security and cloud services used throughout the company.`,
        link: "https://www.usxpress.com/",
        altText: "An image for U.S. Xpress",
        languages: ["React", "TypeScript", "CSS", "Microsoft Azure"]
    },
    {
        company: "Southern Adventist University",
        name: "ShareHim Content Authoring",
        description: `A hierarchicaly structured project management website. An authenticated and authorized user with no special
            permissions may view projects and presentations they have been added to contribute to them, as well as forums.
            Other roles include, but not limited to, presentation manager, project manager, and administrator.`,
        link: "https://www.southern.edu/",
        altText: "A graphic of a 3d looking tunnel",
        languages: ["PHP", "Yii2", "HTML", "CSS", "Ajax", "JQuery"]
    },
    {
        company: "Southern Adventist University",
        name: "Game Based Learning System",
        description: `A web app built for educators to use to assist in student learning using the adventure/task/reward based game structure.
        Game Based Learning implements a hierarchical user structure and implements RBAC. Specifically, I developed business
        frontend and backend logic for Organizations, Courses, Course Sections, and wrote several dozen tests.`,
        link: "https://www.southern.edu/",
        altText: "A graphic of a 4d looking tunnel",
        languages: ["PHP", "Yii2", "HTML", "CSS", "Ajax", "JQuery"]
    }
]