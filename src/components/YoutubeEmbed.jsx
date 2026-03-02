/**
 * YoutubeEmbed — fully responsive 16:9 YouTube embed.
 *
 * Usage:
 *   <YoutubeEmbed id="dQw4w9WgXcQ" title="Video title" />
 */
export default function YoutubeEmbed({ id, title = 'YouTube video' }) {
    return (
        <div className="w-full my-6 rounded-xl overflow-hidden border border-surface-800/50 shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 */ }}>
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    )
}
