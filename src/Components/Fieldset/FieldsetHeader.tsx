import FieldsetLegend from './FieldsetLegend';
import FieldsetDescription from './FieldsetDescription';

interface IProps {
  title : string,
  description? : string,
}

const FieldsetHeader = (props: IProps) => {
  const {
    title,
    description,
  } = props;

  return (
    <>
      <FieldsetLegend>{title}</FieldsetLegend>
      {
        description
          ? <FieldsetDescription>
              {description}
            </FieldsetDescription>
          : null
      }
      
    </>
  )
}

export default FieldsetHeader