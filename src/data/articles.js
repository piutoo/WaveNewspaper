// The built-in sample articles. These are placeholder stories for the project, not real news.
export const articles = [
  {
    slug: 'ukraine-rebuilding',
    category: 'World',
    title: 'Ukrainian communities keep rebuilding',
    summary: 'Volunteers and local groups are repairing homes and schools.',
    image: require('@/assets/1ukraine.jpg'),
    body: [
      'Volunteers and local groups across Ukraine are helping families repair damaged homes. Some are also working to get schools, water and power running again.',
      'Housing, education and reliable services are still the biggest priorities for many communities.',
      'Note: this is a sample article for the Wave News student project.'
    ]
  },
  {
    slug: 'budget-priorities',
    category: 'Politics',
    title: 'Budget debate focuses on public services and the cost of living',
    summary: 'People are asking where the money should go: transport, healthcare or housing.',
    image: require('@/assets/budget.jpg'),
    body: [
      'Every budget means choosing where the money goes. Housing, healthcare and transport come up most often in the debate.',
      'Some people want more spending on public services. Others say the spending has to be affordable in the long run and checked carefully.',
      'Note: this is a sample article for the Wave News student project.'
    ]
  },
  {
    slug: 'climate-cities',
    category: 'Climate',
    title: 'Cities try greener streets to cope with summer heat',
    summary: 'Planners are looking at trees, shade and public transport as summers get hotter.',
    image: require('@/assets/newspaper.jpg'),
    body: [
      'Trees, green roofs and shaded walkways can make busy city streets cooler in hot weather.',
      'Planners are also looking at parks and public transport to help make neighbourhoods cleaner.',
      'Note: this is a sample article for the Wave News student project.'
    ]
  },
  {
    slug: 'local-journalism',
    category: 'World',
    title: 'Why local journalism still matters',
    summary: 'Local reporters explain the decisions that affect people in their area.',
    image: require('@/assets/1newspaper.jpg'),
    body: [
      'Local journalism covers everyday things like council decisions and community events.',
      'News is moving online, but good sources and listening to readers still matter.',
      'Note: this is a sample article for the Wave News student project.'
    ]
  }
]

// Returns the articles made on the Create page (saved in localStorage) plus the sample ones above.
export function allArticles() {
  try {
    const saved = JSON.parse(localStorage.getItem('wave_articles') || '[]')
    return [...saved, ...articles]
  } catch (e) {
    return articles
  }
}
