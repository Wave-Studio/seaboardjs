export default function Hint(props: {content: string}) { 
	return (
		<div className="hint">
			<div className="hint-text">{props.content}</div>
		</div>
)
}